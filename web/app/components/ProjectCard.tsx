import Link from "next/link";
import { Eye, Heart, TrendingUp, Code } from "lucide-react";
import { Startup } from "@/types";

interface ProjectCardProps {
  startup: Startup;
}

const categoryLabels = {
  web: "Веб-приложение",
  mobile: "Мобильное",
  saas: "SaaS",
  bot: "Telegram бот",
  extension: "Расширение",
};

const statusLabels = {
  active: "Активно",
  sold: "Продано",
  pending: "На модерации",
};

const statusColors = {
  active: "bg-green-100 text-green-800",
  sold: "bg-gray-100 text-gray-800",
  pending: "bg-yellow-100 text-yellow-800",
};

export default function ProjectCard({ startup }: ProjectCardProps) {
  return (
    <Link href={`/project/${startup.id}`}>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden group">
        {/* Image Placeholder */}
        <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <Code className="w-16 h-16 text-white opacity-50" />
          </div>
          <div className="absolute top-3 left-3 flex gap-2">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium">
              {categoryLabels[startup.category]}
            </span>
            <span
              className={`px-3 py-1 ${
                statusColors[startup.status]
              } backdrop-blur-sm rounded-full text-xs font-medium`}
            >
              {statusLabels[startup.status]}
            </span>
          </div>
        </div>

        <div className="p-5">
          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary-600 transition-colors line-clamp-1">
            {startup.title}
          </h3>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {startup.shortDescription}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {startup.techStack.slice(0, 3).map((tech: any) => (
              <span
                key={tech}
                className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
              >
                {tech}
              </span>
            ))}
            {startup.techStack.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                +{startup.techStack.length - 3}
              </span>
            )}
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{startup.views}</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              <span>{startup.likes}</span>
            </div>
            {startup.monthlyRevenue && (
              <div className="flex items-center gap-1 text-green-600">
                <TrendingUp className="w-4 h-4" />
                <span>{(startup.monthlyRevenue / 1000).toFixed(0)}k ₽/мес</span>
              </div>
            )}
          </div>

          {/* Price & Revenue Share */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div>
              <div className="text-xs text-gray-500">Цена</div>
              <div className="text-lg font-bold text-gray-900">
                {(startup.price / 1000).toFixed(0)} 000 ₽
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500">Revenue Share</div>
              <div className="text-lg font-bold text-primary-600">
                {startup.revenueShare}%
              </div>
            </div>
          </div>

          {/* Developer */}
          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-semibold text-sm">
              {startup.developer.name[0]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-gray-900 truncate">
                {startup.developer.name}
              </div>
              <div className="text-xs text-gray-500">
                ⭐ {startup.developer.rating} •{" "}
                {startup.developer.projectsCount} проектов
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
