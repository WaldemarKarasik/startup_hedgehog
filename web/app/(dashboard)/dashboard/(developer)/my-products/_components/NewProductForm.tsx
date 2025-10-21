"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import { Button } from "primereact/button";
const NewProductSchema = z.object({
  name: z.string().min(3),
  description: z.string().min(10),
  customizationPrice: z.number().min(300000).max(450000),
  revenueShare: z.number().min(5).max(20),
  techStack: z.string().optional(),
});

type NewProductFormData = z.infer<typeof NewProductSchema>;
export const NewProductForm = () => {
  const form = useForm<NewProductFormData>();
  const [activeStep, setActiveStep] = useState(0);
  const nextStep = () => setActiveStep((prev) => Math.min(prev + 1, 2));
  const prevStep = () => setActiveStep((prev) => Math.max(prev - 1, 0));
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
                Название продукта
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-colors"
                placeholder="@username"
              />
              {/* Ошибка будет показана здесь */}
              {/* <FormError message={errors.telegram?.message} /> */}
            </div>
            {/* Description */}
            <div>
              <label className="block  font-medium text-gray-700 mb-2">
                Описание
              </label>
              <textarea
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-colors"
                placeholder="Описание продукта"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700 mb-2">
                Технологии (tech stack)
              </label>
              <textarea
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-colors"
                placeholder="Вводите через пробел. Например: Nodejs Postgres "
              />
            </div>
            {/* Action buttons */}
            <div className="flex gap-5 ">
              <Button label="Дальше" size={"small"} onClick={nextStep} />
            </div>
          </div>
        </StepperPanel>
        {/* Pricing */}
        <StepperPanel header="Стоимость">
          <div className="space-y-5">
            <label className="block font-medium text-gray-700 mb-2">
              Стоимость кастомизации
            </label>
            <div
              className="flex items-center justify-between gap-10

"
            >
              <input
                type="range"
                min="300000"
                max="450000"
                step="1000"
                className="flex-1 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div>
                <input
                  type="number"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-colors"
                  min={300000}
                  max={450000}
                />
              </div>

              {/* Ошибка будет показана здесь */}
              {/* <FormError message={errors.telegram?.message} /> */}
            </div>
            {/* Description */}
            <div>
              <label className="block  font-medium text-gray-700 mb-2">
                Процент Revenue Share
              </label>
              <textarea
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-colors"
                placeholder="Описание продукта"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700 mb-2">
                Технологии (tech stack)
              </label>
              <textarea
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-colors"
                placeholder="Вводите через пробел. Например: Nodejs Postgres "
              />
            </div>
            {/* Action buttons */}
            <div className="flex gap-5 ">
              <Button label="Дальше" size={"small"} onClick={nextStep} />
              <Button
                label="Назад"
                size={"small"}
                severity={"secondary"}
                onClick={prevStep}
              />
            </div>
          </div>
        </StepperPanel>
        <StepperPanel header="Поддержка">
          <div className="flex flex-column h-12rem">
            <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
              Content III
            </div>
          </div>
          <div className="flex pt-4 justify-content-start">
            <Button
              label="Back"
              severity="secondary"
              icon="pi pi-arrow-left"
              onClick={prevStep}
            />
          </div>
        </StepperPanel>
        <StepperPanel header="Ссылки">
          <div className="flex flex-column h-12rem">
            <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
              Content III
            </div>
          </div>
          <div className="flex pt-4 justify-content-start">
            <Button
              label="Back"
              severity="secondary"
              icon="pi pi-arrow-left"
              onClick={prevStep}
            />
          </div>
        </StepperPanel>
      </Stepper>
    </div>
  );
};
