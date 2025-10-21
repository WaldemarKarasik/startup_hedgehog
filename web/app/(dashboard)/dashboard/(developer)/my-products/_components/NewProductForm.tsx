"use client";

import { SyntheticEvent, useRef, useState } from "react";
import { FieldPath, Resolver, useForm } from "react-hook-form";
import z from "zod";
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import { Button } from "primereact/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductCategories } from "shared";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import { InputText } from "primereact/inputtext";
import { FileUpload } from "primereact/fileupload";
import { MultipleImageUpload } from "@/app/_shared-components/MultipleImageUpload";

// Convert Prisma enum object to array for Zod and Dropdown
const productCategoriesArray = Object.values(ProductCategories) as [
  string,
  ...string[]
];

const NewProductSchema = z.object({
  // General info
  name: z.string().min(3, { message: "Минимум 3 символа" }),
  description: z.string().min(10, { message: "Минимум 10 символов" }),
  techStack: z
    .string({ message: "Это поле обязательно" })
    .nonempty({ message: "Это поле не может быть пустым" }),
  category: z.enum(productCategoriesArray, { message: "Выберите категорию" }),
  // Price
  customizationPrice: z.number().min(300000).max(450000),
  revenueShare: z.number().min(5).max(20),
  revenueShareDuration: z.number().min(1).max(100),
  // Support
  supportPeriod: z
    .number()
    .min(1, { message: "Минимум 1 месяц" })
    .max(100, { message: "Максимум 100 месяцев" }),
  // Media
  images: z
    .array(z.instanceof(File))
    .min(1, "Загрузите по меньшей мере 1 изображение")
    .max(10, "Не более 10 изображений")
    .refine(
      (files) => files.every((file) => file.size <= 5 * 1024 * 1024),
      "Each image must be less than 5MB"
    )
    .refine(
      (files) =>
        files.every((file) =>
          ["image/jpeg", "image/png", "image/webp"].includes(file.type)
        ),
      "Only JPG, PNG, WEBP formats are supported"
    ),
});

export type NewProductFormData = z.infer<typeof NewProductSchema>;
export const NewProductForm = ({
  isDevelopersFirstProduct,
}: {
  isDevelopersFirstProduct: boolean;
}) => {
  const {
    register,
    trigger,
    watch,
    setValue,
    formState: { errors },
  } = useForm<NewProductFormData>({
    resolver: zodResolver(NewProductSchema) as Resolver<NewProductFormData>,
    defaultValues: {
      customizationPrice: 300000,
      revenueShare: 10,
      revenueShareDuration: 12,
      supportPeriod: 12,
      ...(isDevelopersFirstProduct && {}),
    },
  });
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => setActiveStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setActiveStep((prev) => Math.max(prev - 1, 0));
  const stepFields: Record<number, FieldPath<NewProductFormData>[]> = {
    0: ["name", "description", "techStack", "category"],
    1: ["customizationPrice", "revenueShare", "revenueShareDuration"],
    2: ["supportPeriod"],
    3: ["images"],
  };
  const customizationPrice = watch("customizationPrice");
  const revenueShare = watch("revenueShare");
  const revenueShareDuration = watch("revenueShareDuration");
  const category = watch("category");
  const handleSliderChange = (
    field: keyof NewProductFormData,
    value: number
  ) => {
    setValue(field, value, { shouldValidate: true });
  };

  // Handler for input changes
  const handleInputChange = (
    field: keyof NewProductFormData,
    value: string
  ) => {
    const numValue = parseInt(value) || 0;
    setValue(field, numValue, { shouldValidate: true });
  };
  const handleNext = async () => {
    const fieldsToValidate = stepFields[activeStep];
    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid) {
      nextStep();
    }
  };

  const handleSubmit = async () => {
    const fieldsToValidate = stepFields[activeStep];
    const isMediaValid = await trigger(fieldsToValidate);
    if (isMediaValid) {
      alert("Now create product");
    }
  };

  return (
    <div className="mt-5 space-y-5">
      <Stepper
        linear
        activeStep={activeStep}
        onChangeStep={(e) => setActiveStep(e.index)}
      >
        {/* General info */}
        <StepperPanel header="Общая информация">
          <div className="space-y-5">
            <div>
              {/* Product name */}
              <label className="block font-medium text-gray-700 mb-2">
                Название
              </label>
              <InputText
                {...register("name")}
                placeholder="Введите название продукта"
                className="w-full"
              />
              {/* Ошибка будет показана здесь */}
              {/* <FormError message={errors.telegram?.message} /> */}
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            {/* Description */}
            <div>
              <label className="block  font-medium text-gray-700 mb-2">
                Описание
              </label>
              <InputTextarea
                {...register("description")}
                rows={5}
                className="w-full"
              />

              {/* <textarea
                {...register("description")}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-colors"
                placeholder="Введите описание продукта"
              /> */}
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>
            {/* Tech stack */}
            <div>
              <label className="block font-medium text-gray-700 mb-2">
                Технологии (tech stack)
              </label>
              <InputText
                {...register("techStack")}
                className="w-full"
                placeholder="Вводите через пробел. Например: Nodejs Postgres Redis"
              />
              {errors.techStack && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.techStack.message}
                </p>
              )}
            </div>
            {/* Category */}
            <div>
              <label className="block font-medium text-gray-700 mb-2">
                Категория
              </label>
              <Dropdown
                value={category}
                onChange={(e) => setValue("category", e.target.value)}
                options={productCategoriesArray}
                placeholder="Выберите категорию"
                className="w-full md:w-14rem"
                checkmark={true}
                highlightOnSelect={false}
              />

              {errors.category && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.category.message}
                </p>
              )}
            </div>
            {/* Action buttons */}
            <div className="flex gap-5 ">
              <Button label="Дальше" size={"small"} onClick={handleNext} />
            </div>
          </div>
        </StepperPanel>
        {/* Pricing */}
        <StepperPanel header="Стоимость">
          <div className="space-y-5">
            {/* Customization price */}
            <div>
              <label className="block font-medium text-gray-700 mb-2">
                Стоимость кастомизации
              </label>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <input
                  type="range"
                  value={customizationPrice}
                  onChange={(e) =>
                    handleSliderChange(
                      "customizationPrice",
                      parseInt(e.target.value)
                    )
                  }
                  min="300000"
                  max="450000"
                  step="1000"
                  className="flex-1 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <div className="flex items-center gap-2 min-w-0 flex-1 sm:flex-initial">
                  <input
                    type="number"
                    value={customizationPrice}
                    onChange={(e) =>
                      handleInputChange("customizationPrice", e.target.value)
                    }
                    className="flex-1 text-right text-lg  border-2 border-gray-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-colors"
                    step={1000}
                    min={300000}
                    max={450000}
                  />
                  <span className="font-medium text-2xl whitespace-nowrap flex-shrink-0">
                    ₽
                  </span>
                </div>
              </div>
              {errors.customizationPrice && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.customizationPrice.message}
                </p>
              )}
            </div>

            {/* Revenue Share  */}
            <div>
              <label className="block font-medium text-gray-700 mb-2">
                Процент Revenue Share
              </label>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <input
                  type="range"
                  min="5"
                  max="20"
                  step="1"
                  value={revenueShare}
                  onChange={(e) =>
                    handleSliderChange("revenueShare", parseInt(e.target.value))
                  }
                  className="flex-1 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <div className="flex items-center gap-2 min-w-0 flex-1 sm:flex-initial">
                  <input
                    type="number"
                    className="flex-1 text-right text-lg border-2 border-gray-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-colors"
                    min={5}
                    max={20}
                    value={revenueShare}
                    onChange={(e) =>
                      handleInputChange("revenueShare", e.target.value)
                    }
                  />
                  <span className="font-medium text-2xl whitespace-nowrap flex-shrink-0">
                    %
                  </span>
                </div>
              </div>
              {errors.revenueShare && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.revenueShare.message}
                </p>
              )}
            </div>

            {/* Revenue Share Duration  */}
            <div>
              <label className="block font-medium text-gray-700 mb-2">
                Длительность Revenue Share
              </label>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <input
                  type="range"
                  min="1"
                  max="100"
                  step="1"
                  value={revenueShareDuration}
                  onChange={(e) =>
                    handleSliderChange(
                      "revenueShareDuration",
                      parseInt(e.target.value)
                    )
                  }
                  className="flex-1 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <div className="flex items-center gap-2 min-w-0 flex-1 sm:flex-initial">
                  <input
                    type="number"
                    value={revenueShareDuration}
                    onChange={(e) =>
                      handleInputChange("revenueShareDuration", e.target.value)
                    }
                    className="flex-1 text-right text-lg border-2 border-gray-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-colors"
                    min={1}
                    max={100}
                  />
                  <span className="font-medium text-xl whitespace-nowrap flex-shrink-0">
                    Месяцев
                  </span>
                </div>
              </div>
              {errors.revenueShareDuration && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.revenueShareDuration.message}
                </p>
              )}
            </div>
            {/* Action buttons */}
            <div className="flex gap-5 ">
              <Button label="Дальше" size={"small"} onClick={handleNext} />
              <Button
                label="Назад"
                size={"small"}
                severity={"secondary"}
                onClick={prevStep}
              />
            </div>
          </div>
        </StepperPanel>
        {/* Support */}
        <StepperPanel header="Поддержка">
          <div className="space-y-5">
            <label className="block font-medium text-gray-700 mb-2">
              Длительность поддержки
            </label>
            <span className="text-gray-500">
              Укажите сколько месяцев после продажи вы будете поддерживать
              продукт
            </span>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <input
                type="range"
                min="1"
                max="100"
                step="1"
                value={watch("supportPeriod")}
                onChange={(e) =>
                  handleSliderChange("supportPeriod", parseInt(e.target.value))
                }
                className="flex-1 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex items-center gap-2 min-w-0 flex-1 sm:flex-initial">
                <input
                  type="number"
                  value={watch("supportPeriod")}
                  onChange={(e) =>
                    handleInputChange("supportPeriod", e.target.value)
                  }
                  className="flex-1 text-right text-lg border-2 border-gray-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-colors"
                  min={1}
                  max={100}
                />
                <span className="font-medium text-xl whitespace-nowrap flex-shrink-0">
                  Месяцев
                </span>
              </div>
            </div>
            {errors.supportPeriod && (
              <p className="text-red-500 text-sm mt-1">
                {errors.supportPeriod.message}
              </p>
            )}
            <div className="flex gap-5 ">
              <Button label="Дальше" size={"small"} onClick={handleNext} />
              <Button
                label="Назад"
                size={"small"}
                severity={"secondary"}
                onClick={prevStep}
              />
            </div>
          </div>
        </StepperPanel>
        <StepperPanel header="Медиа">
          <div className="space-y-5 flex flex-col">
            <div className="flex-1 flex flex-column">
              <MultipleImageUpload
                // Pass the necessary props to connect with RHF
                value={watch("images")}
                onChange={(files) =>
                  setValue("images", files, { shouldValidate: true })
                }
              />
            </div>
            {errors.images && (
              <p className="text-red-600 text-sm mt-2">
                {errors.images.message}
              </p>
            )}
            <div className="flex gap-5 ">
              <Button
                size={"small"}
                label="Отправить на модерацию"
                onClick={handleSubmit}
              />
              <Button
                label="Назад"
                size={"small"}
                severity={"secondary"}
                onClick={prevStep}
              />
            </div>
          </div>
        </StepperPanel>
      </Stepper>
    </div>
  );
};
