import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [showProfile, setShowProfile] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState<any[]>([
    { id: 1, sender: 'hr', name: 'Анна Петрова', message: 'Привет! Я HR-менеджер TechCorp. Расскажи о своем опыте с React?', time: '14:30' },
    { id: 2, sender: 'user', message: 'Привет! Работаю с React уже 3 года, создавал SPA и мобильные приложения', time: '14:32' }
  ]);

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
      logo: '🚀',
      description: 'Мы ищем опытного React разработчика для работы над инновационными финтех-проектами. Присоединяйтесь к команде из 500+ профессионалов!',
      requirements: ['Опыт работы с React 16.8+ и хуками', 'Знание TypeScript и современного JavaScript', 'Опыт работы с Redux или аналогичными решениями', 'Понимание принципов REST API и GraphQL'],
      responsibilities: ['Разработка новых функций веб-приложения', 'Оптимизация производительности', 'Code review и менторинг', 'Участие в архитектурных решениях'],
      benefits: ['ДМС для сотрудника и семьи', 'Гибкий график работы', 'Обучение за счет компании', 'Современный офис в центре'],
      remote: true,
      experience: '3-5 лет'
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
      logo: '☁️',
      description: 'CloudTech ищет DevOps инженера для масштабирования облачной инфраструктуры. Работай с современными технологиями в дружной команде!',
      requirements: ['Опыт работы с контейнеризацией (Docker)', 'Знание Kubernetes и оркестрации', 'Опыт работы с AWS или аналогичными облачными платформами', 'Понимание принципов CI/CD'],
      responsibilities: ['Управление облачной инфраструктурой', 'Автоматизация процессов развертывания', 'Мониторинг и оптимизация систем', 'Обеспечение безопасности'],
      benefits: ['Высокая зарплата', 'Полная удаленка', 'Современные технологии', 'Международная команда'],
      remote: true,
      experience: '4-6 лет'
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
      logo: '🐍',
      description: 'DataFlow - компания, специализирующаяся на обработке больших данных. Ищем Python разработчика для создания высоконагруженных систем.',
      requirements: ['Опыт разработки на Python 3.8+', 'Знание Django или FastAPI', 'Опыт работы с PostgreSQL', 'Понимание принципов REST API'],
      responsibilities: ['Разработка backend-сервисов', 'Оптимизация баз данных', 'Интеграция с внешними API', 'Написание тестов'],
      benefits: ['Интересные задачи с big data', 'Гибкий график', 'Команда профессионалов', 'Карьерный рост'],
      remote: false,
      experience: '2-4 года'
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

  const sendMessage = () => {
    if (chatMessage.trim()) {
      const newMessage = {
        id: chatMessages.length + 1,
        sender: 'user',
        message: chatMessage,
        time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages([...chatMessages, newMessage]);
      setChatMessage('');
      
      // Simulate HR response after 2 seconds
      setTimeout(() => {
        const hrResponse = {
          id: chatMessages.length + 2,
          sender: 'hr',
          name: 'Анна Петрова',
          message: 'Отлично! Мы бы хотели пригласить вас на техническое интервью. Когда вам удобно?',
          time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
        };
        setChatMessages(prev => [...prev, hrResponse]);
      }, 2000);
    }
  };

  const profileStats = {
    profileViews: 1247,
    applicationsSent: 23,
    responsesReceived: 8,
    interviewsScheduled: 5,
    skillsProgress: {
      React: 85,
      TypeScript: 78,
      'Node.js': 72,
      Python: 45
    }
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
              <button 
                onClick={() => setShowProfile(true)}
                className="text-white/80 hover:text-white transition-colors"
              >
                Профиль
              </button>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Блог</a>
            </nav>
            <div className="flex items-center space-x-3">
              <Sheet open={showChat} onOpenChange={setShowChat}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30 relative">
                    <Icon name="MessageCircle" size={16} className="mr-1" />
                    Чат
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-96">
                  <SheetHeader>
                    <SheetTitle className="flex items-center space-x-2">
                      <Icon name="MessageCircle" size={20} />
                      <span>HR Чат</span>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col h-full mt-6">
                    <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                      {chatMessages.map((msg) => (
                        <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`max-w-[80%] ${msg.sender === 'user' ? 'order-2' : 'order-1'}`}>
                            {msg.sender === 'hr' && (
                              <div className="flex items-center space-x-2 mb-1">
                                <Avatar className="w-6 h-6">
                                  <AvatarImage src="/placeholder-hr.jpg" />
                                  <AvatarFallback>АП</AvatarFallback>
                                </Avatar>
                                <span className="text-xs text-gray-600">{msg.name}</span>
                              </div>
                            )}
                            <div className={`rounded-lg p-3 ${msg.sender === 'user' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-900'}`}>
                              <p className="text-sm">{msg.message}</p>
                              <span className="text-xs opacity-70 mt-1 block">{msg.time}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <Textarea
                        value={chatMessage}
                        onChange={(e) => setChatMessage(e.target.value)}
                        placeholder="Напишите сообщение..."
                        className="flex-1 resize-none"
                        rows={2}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            sendMessage();
                          }
                        }}
                      />
                      <Button onClick={sendMessage} className="px-3">
                        <Icon name="Send" size={16} />
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
              <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Войти
              </Button>
            </div>
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
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm" variant="outline" onClick={() => setSelectedJob(job)}>
                            Подробнее
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="flex items-center space-x-3">
                              <span className="text-3xl">{job.logo}</span>
                              <div>
                                <h3 className="text-2xl font-bold">{job.title}</h3>
                                <p className="text-primary text-lg">{job.company}</p>
                              </div>
                            </DialogTitle>
                          </DialogHeader>
                          
                          <Tabs defaultValue="overview" className="mt-6">
                            <TabsList className="grid w-full grid-cols-4">
                              <TabsTrigger value="overview">Обзор</TabsTrigger>
                              <TabsTrigger value="requirements">Требования</TabsTrigger>
                              <TabsTrigger value="benefits">Условия</TabsTrigger>
                              <TabsTrigger value="company">О компании</TabsTrigger>
                            </TabsList>
                            
                            <TabsContent value="overview" className="space-y-6">
                              <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-4">
                                  <div className="flex items-center space-x-2">
                                    <Icon name="MapPin" size={20} className="text-gray-600" />
                                    <span>{job.location}</span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Icon name="Banknote" size={20} className="text-gray-600" />
                                    <span>{job.salary}</span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Icon name="Clock" size={20} className="text-gray-600" />
                                    <span>{job.type}</span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Icon name="Briefcase" size={20} className="text-gray-600" />
                                    <span>Опыт: {job.experience}</span>
                                  </div>
                                  {job.remote && (
                                    <div className="flex items-center space-x-2">
                                      <Icon name="Wifi" size={20} className="text-green-600" />
                                      <span className="text-green-600">Возможна удаленная работа</span>
                                    </div>
                                  )}
                                </div>
                                
                                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6 text-center">
                                  <div className="text-4xl font-bold text-primary mb-2">{job.match}%</div>
                                  <div className="text-gray-600 mb-4">Совпадение с профилем</div>
                                  <Progress value={job.match} className="mb-4" />
                                  <Button className="w-full">
                                    <Icon name="Send" size={16} className="mr-2" />
                                    Откликнуться
                                  </Button>
                                </div>
                              </div>
                              
                              <div>
                                <h4 className="text-lg font-semibold mb-3">Описание</h4>
                                <p className="text-gray-700 leading-relaxed">{job.description}</p>
                              </div>
                              
                              <div>
                                <h4 className="text-lg font-semibold mb-3">Навыки</h4>
                                <div className="flex flex-wrap gap-2">
                                  {job.skills.map((skill, index) => (
                                    <Badge key={index} variant="secondary" className="px-3 py-1">
                                      {skill}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </TabsContent>
                            
                            <TabsContent value="requirements" className="space-y-4">
                              <div>
                                <h4 className="text-lg font-semibold mb-3">Требования</h4>
                                <ul className="space-y-2">
                                  {job.requirements?.map((req, index) => (
                                    <li key={index} className="flex items-start space-x-2">
                                      <Icon name="Check" size={16} className="text-green-600 mt-1 flex-shrink-0" />
                                      <span>{req}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div>
                                <h4 className="text-lg font-semibold mb-3">Обязанности</h4>
                                <ul className="space-y-2">
                                  {job.responsibilities?.map((resp, index) => (
                                    <li key={index} className="flex items-start space-x-2">
                                      <Icon name="ArrowRight" size={16} className="text-primary mt-1 flex-shrink-0" />
                                      <span>{resp}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </TabsContent>
                            
                            <TabsContent value="benefits" className="space-y-4">
                              <h4 className="text-lg font-semibold mb-3">Что мы предлагаем</h4>
                              <ul className="space-y-3">
                                {job.benefits?.map((benefit, index) => (
                                  <li key={index} className="flex items-start space-x-3">
                                    <Icon name="Gift" size={16} className="text-accent mt-1 flex-shrink-0" />
                                    <span>{benefit}</span>
                                  </li>
                                ))}
                              </ul>
                            </TabsContent>
                            
                            <TabsContent value="company">
                              <div className="text-center py-8">
                                <div className="text-6xl mb-4">{job.logo}</div>
                                <h3 className="text-2xl font-bold mb-2">{job.company}</h3>
                                <p className="text-gray-600 mb-6">{job.description}</p>
                                <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                                  <div className="text-center">
                                    <div className="text-2xl font-bold text-primary">500+</div>
                                    <div className="text-sm text-gray-600">Сотрудников</div>
                                  </div>
                                  <div className="text-center">
                                    <div className="text-2xl font-bold text-accent">12</div>
                                    <div className="text-sm text-gray-600">Вакансий</div>
                                  </div>
                                  <div className="text-center">
                                    <div className="text-2xl font-bold text-green-600">5⭐</div>
                                    <div className="text-sm text-gray-600">Рейтинг</div>
                                  </div>
                                </div>
                              </div>
                            </TabsContent>
                          </Tabs>
                        </DialogContent>
                      </Dialog>
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

      {/* Profile Modal */}
      <Dialog open={showProfile} onOpenChange={setShowProfile}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-3">
              <Avatar className="w-12 h-12">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>ИИ</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-2xl font-bold">Иван Иванов</h3>
                <p className="text-primary">Senior Frontend Developer</p>
              </div>
            </DialogTitle>
          </DialogHeader>
          
          <Tabs defaultValue="stats" className="mt-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="stats">Статистика</TabsTrigger>
              <TabsTrigger value="skills">Навыки</TabsTrigger>
              <TabsTrigger value="activity">Активность</TabsTrigger>
            </TabsList>
            
            <TabsContent value="stats" className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="text-center p-4">
                  <div className="text-2xl font-bold text-primary mb-1">{profileStats.profileViews}</div>
                  <div className="text-sm text-gray-600">Просмотров профиля</div>
                </Card>
                <Card className="text-center p-4">
                  <div className="text-2xl font-bold text-accent mb-1">{profileStats.applicationsSent}</div>
                  <div className="text-sm text-gray-600">Откликов отправлено</div>
                </Card>
                <Card className="text-center p-4">
                  <div className="text-2xl font-bold text-green-600 mb-1">{profileStats.responsesReceived}</div>
                  <div className="text-sm text-gray-600">Ответов получено</div>
                </Card>
                <Card className="text-center p-4">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{profileStats.interviewsScheduled}</div>
                  <div className="text-sm text-gray-600">Интервью назначено</div>
                </Card>
              </div>
              
              <Card className="p-6">
                <h4 className="text-lg font-semibold mb-4">Эффективность поиска</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Отклик на просмотры</span>
                      <span className="font-semibold">{Math.round((profileStats.responsesReceived / profileStats.profileViews) * 100)}%</span>
                    </div>
                    <Progress value={(profileStats.responsesReceived / profileStats.profileViews) * 100} />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Приглашения на интервью</span>
                      <span className="font-semibold">{Math.round((profileStats.interviewsScheduled / profileStats.applicationsSent) * 100)}%</span>
                    </div>
                    <Progress value={(profileStats.interviewsScheduled / profileStats.applicationsSent) * 100} />
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <h4 className="text-lg font-semibold mb-4">Активность по месяцам</h4>
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: 84 }, (_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-sm ${
                        Math.random() > 0.7 ? 'bg-primary' :
                        Math.random() > 0.4 ? 'bg-primary/60' :
                        Math.random() > 0.2 ? 'bg-primary/30' : 'bg-gray-200'
                      }`}
                      title={`Активность ${i + 1} день назад`}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-xs text-gray-600 mt-2">
                  <span>3 месяца назад</span>
                  <span>Сегодня</span>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="skills" className="space-y-4">
              <Card className="p-6">
                <h4 className="text-lg font-semibold mb-4">Прогресс изучения навыков</h4>
                <div className="space-y-4">
                  {Object.entries(profileStats.skillsProgress).map(([skill, progress]) => (
                    <div key={skill}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">{skill}</span>
                        <span className="text-gray-600">{progress}%</span>
                      </div>
                      <Progress value={progress} className="h-2" />
                    </div>
                  ))}
                </div>
              </Card>
              
              <Card className="p-6">
                <h4 className="text-lg font-semibold mb-4">Рекомендуемые навыки</h4>
                <div className="space-y-3">
                  {[
                    { name: 'GraphQL', demand: 85, salary: '+15%' },
                    { name: 'Vue.js', demand: 78, salary: '+10%' },
                    { name: 'Docker', demand: 92, salary: '+20%' }
                  ].map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium">{skill.name}</div>
                        <div className="text-sm text-gray-600">Востребованность: {skill.demand}%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-green-600">{skill.salary} к зарплате</div>
                        <Button size="sm" variant="outline" className="mt-1">Изучить</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="activity" className="space-y-4">
              <div className="space-y-4">
                {[
                  { type: 'application', company: 'TechCorp', position: 'Senior React Developer', time: '2 часа назад', status: 'pending' },
                  { type: 'view', company: 'CloudTech', position: 'DevOps Engineer', time: '5 часов назад', status: 'viewed' },
                  { type: 'response', company: 'DataFlow', position: 'Python Developer', time: '1 день назад', status: 'response' },
                  { type: 'interview', company: 'StartupX', position: 'Full Stack Developer', time: '2 дня назад', status: 'scheduled' }
                ].map((activity, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          activity.type === 'application' ? 'bg-blue-100 text-blue-600' :
                          activity.type === 'view' ? 'bg-gray-100 text-gray-600' :
                          activity.type === 'response' ? 'bg-green-100 text-green-600' :
                          'bg-purple-100 text-purple-600'
                        }`}>
                          <Icon name={
                            activity.type === 'application' ? 'Send' :
                            activity.type === 'view' ? 'Eye' :
                            activity.type === 'response' ? 'MessageSquare' :
                            'Calendar'
                          } size={16} />
                        </div>
                        <div>
                          <div className="font-medium">{activity.position}</div>
                          <div className="text-sm text-gray-600">{activity.company}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={activity.status === 'response' ? 'default' : 'secondary'}>
                          {activity.status === 'pending' ? 'Ожидание' :
                           activity.status === 'viewed' ? 'Просмотрено' :
                           activity.status === 'response' ? 'Ответ получен' : 'Интервью'}
                        </Badge>
                        <div className="text-xs text-gray-500 mt-1">{activity.time}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;