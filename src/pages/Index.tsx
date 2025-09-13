import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const jobs = [
    {
      id: 1,
      title: 'Senior React Developer',
      company: 'TechCorp',
      location: 'Москва',
      salary: '200-300k ₽',
      type: 'Полная занятость',
      skills: ['React', 'TypeScript', 'Node.js'],
      match: 92,
      logo: '🚀'
    },
    {
      id: 2,
      title: 'DevOps Engineer',
      company: 'CloudTech',
      location: 'СПб / Удаленно',
      salary: '250-350k ₽',
      type: 'Полная занятость',
      skills: ['Docker', 'Kubernetes', 'AWS'],
      match: 87,
      logo: '☁️'
    },
    {
      id: 3,
      title: 'Python Backend Developer',
      company: 'DataFlow',
      location: 'Удаленно',
      salary: '180-250k ₽',
      type: 'Полная занятость',
      skills: ['Python', 'Django', 'PostgreSQL'],
      match: 78,
      logo: '🐍'
    }
  ];

  const companies = [
    {
      name: 'TechCorp',
      logo: '🚀',
      employees: '500+',
      openJobs: 12,
      description: 'Лидер в области финтеха'
    },
    {
      name: 'CloudTech',
      logo: '☁️',
      employees: '200+',
      openJobs: 8,
      description: 'Облачные решения для бизнеса'
    },
    {
      name: 'DataFlow',
      logo: '🐍',
      employees: '100+',
      openJobs: 15,
      description: 'Большие данные и ML'
    }
  ];

  const filters = ['React', 'Python', 'DevOps', 'Remote', 'Senior', 'Junior'];

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-vibrant-purple via-primary to-creative-orange">
      {/* Header */}
      <header className="backdrop-blur-md bg-white/10 border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Rocket" size={32} className="text-white animate-float" />
              <h1 className="text-2xl font-bold text-white">IT JobSpace</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-white/80 hover:text-white transition-colors">Вакансии</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Компании</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Резюме</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Блог</a>
            </nav>
            <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Войти
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-6 animate-pulse-glow">
            Найди работу мечты в IT 🚀
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Революционная платформа для поиска IT-вакансий с умным матчингом
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Input
                type="text"
                placeholder="Поиск по навыкам, компаниям, позициям..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg rounded-full bg-white/20 backdrop-blur-md border-white/30 text-white placeholder-white/70"
              />
              <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70" />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={selectedFilters.includes(filter) ? "default" : "outline"}
                onClick={() => toggleFilter(filter)}
                className={`rounded-full px-6 ${
                  selectedFilters.includes(filter)
                    ? 'bg-white text-primary'
                    : 'bg-white/20 text-white border-white/30 hover:bg-white/30'
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white/10 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">2,500+</div>
              <div className="opacity-80">Активных вакансий</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="opacity-80">IT-компаний</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="opacity-80">Точность матчинга</div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl font-bold text-dark-charcoal">
              🔥 Горячие вакансии
            </h3>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Смотреть все
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>

          <div className="grid gap-6">
            {jobs.map((job) => (
              <Card key={job.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="text-4xl">{job.logo}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-xl font-bold text-dark-charcoal group-hover:text-primary transition-colors">
                            {job.title}
                          </h4>
                          <Badge 
                            variant="secondary" 
                            className={`ml-2 ${
                              job.match >= 90 ? 'bg-green-100 text-green-800' :
                              job.match >= 80 ? 'bg-yellow-100 text-yellow-800' :
                              'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {job.match}% match
                          </Badge>
                        </div>
                        <div className="text-lg font-semibold text-primary mb-2">{job.company}</div>
                        <div className="flex items-center space-x-4 text-gray-600 mb-3">
                          <div className="flex items-center space-x-1">
                            <Icon name="MapPin" size={16} />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="Banknote" size={16} />
                            <span>{job.salary}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="Clock" size={16} />
                            <span>{job.type}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2 ml-4">
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        <Icon name="Heart" size={16} className="mr-1" />
                        Сохранить
                      </Button>
                      <Button size="sm" variant="outline">
                        Откликнуться
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-dark-charcoal mb-12">
            🏢 Топовые IT-компании
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {companies.map((company, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="text-5xl mb-4">{company.logo}</div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {company.name}
                  </CardTitle>
                  <p className="text-gray-600">{company.description}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-2xl font-bold text-primary">{company.employees}</div>
                      <div className="text-sm text-gray-600">Сотрудников</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-creative-orange">{company.openJobs}</div>
                      <div className="text-sm text-gray-600">Вакансий</div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    Посмотреть вакансии
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-dark-charcoal mb-12">
            ⚡ Почему выбирают нас?
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl mb-4 group-hover:animate-float">🎯</div>
              <h4 className="text-xl font-bold mb-2">Smart Matching</h4>
              <p className="text-gray-600">ИИ подбирает идеальные вакансии по вашим навыкам</p>
            </div>
            <div className="text-center group">
              <div className="text-4xl mb-4 group-hover:animate-float">💬</div>
              <h4 className="text-xl font-bold mb-2">Быстрый чат</h4>
              <p className="text-gray-600">Мгновенная связь с HR и техническими интервьюерами</p>
            </div>
            <div className="text-center group">
              <div className="text-4xl mb-4 group-hover:animate-float">🧪</div>
              <h4 className="text-xl font-bold mb-2">Тестирование</h4>
              <p className="text-gray-600">Проходите тесты прямо на платформе</p>
            </div>
            <div className="text-center group">
              <div className="text-4xl mb-4 group-hover:animate-float">📊</div>
              <h4 className="text-xl font-bold mb-2">Аналитика</h4>
              <p className="text-gray-600">Отслеживайте прогресс поиска работы</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-charcoal text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Rocket" size={24} />
                <span className="text-xl font-bold">IT JobSpace</span>
              </div>
              <p className="text-gray-300">
                Революционная платформа для поиска IT-работы
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Вакансии</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Frontend</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Backend</a></li>
                <li><a href="#" className="hover:text-white transition-colors">DevOps</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Data Science</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Компании</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Топ компании</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Стартапы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Удаленная работа</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Поддержка</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 IT JobSpace. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;