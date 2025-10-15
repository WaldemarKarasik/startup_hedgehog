import {
  DollarSign,
  Handshake,
  Hourglass,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

export const HowItWorksForDevelopers = () => {
  return (
    <div className="grid md:grid-cols-4 gap-8">
      <div className="text-center">
        <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
          1
        </div>
        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
          <Wrench className="w-6 h-6 text-primary-600" />
        </div>
        <h3 className="font-semibold mb-2">Добавьте проект на биржу</h3>
        <p className="text-gray-600 text-sm">
          Создайте аккаунт разработчика и отправьте проект на модерацию
        </p>
      </div>

      <div className="text-center">
        <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
          2
        </div>
        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
          <Users className="w-6 h-6 text-primary-600" />
        </div>
        <h3 className="font-semibold mb-2">Найдите партнера</h3>
        <p className="text-gray-600 text-sm">
          Мы активно ищем покупателей для вашего проекта среди 500+
          предпринимателей
        </p>
      </div>

      <div className="text-center">
        <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
          3
        </div>
        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
          <Handshake className="w-6 h-6 text-primary-600" />
        </div>
        <h3 className="font-semibold mb-2">Передайте проект</h3>
        <p className="text-gray-600 text-sm">
          Подпишите договор, передайте исходники и помогите покупателю с
          интеграцией
        </p>
      </div>

      <div className="text-center">
        <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
          4
        </div>
        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
          <DollarSign className="w-6 h-6 text-primary-600" />
        </div>
        <h3 className="font-semibold mb-2">Получайте Revenue Share</h3>
        <p className="text-gray-600 text-sm">
          Автоматически получайте процент от прибыли каждый месяц через
          платформу
        </p>
      </div>
    </div>
  );
};
