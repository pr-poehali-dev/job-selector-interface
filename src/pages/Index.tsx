import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [currentView, setCurrentView] = useState('home');
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: 'HR', message: 'Привет! Есть вопросы по вакансии React Developer?', time: '14:32' },
    { id: 2, sender: 'Вы', message: 'Да, хотел уточнить требования к опыту', time: '14:35' }
  ]);
  const [newMessage, setNewMessage] = useState('');

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
      description: 'Мы ищем опытного React разработчика для работы над инновационными финтех-проектами. Вы будете работать в команде с лучшими специалистами и участвовать в создании продуктов, которыми пользуются миллионы людей.',
      requirements: [
        'Опыт работы с React от 3+ лет',
        'Знание TypeScript и современных подходов',
        'Опыт работы с Redux/Zustand',
        'Понимание принципов REST API',
        'Знание Git и современных инструментов разработки'
      ],
      responsibilities: [
        'Разработка новых функций приложения',
        'Оптимизация производительности',
        'Code review и менторство младших разработчиков',
        'Участие в архитектурных решениях',
        'Взаимодействие с дизайнерами и PM'
      ],
      benefits: [
        'ДМС для вас и семьи',
        'Гибкий график работы',
        'Возможность удаленной работы',
        'Обучение за счет компании',
        'Корпоративные мероприятия'
      ]
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

  const sendMessage = () => {
    if (newMessage.trim()) {
      setChatMessages(prev => [...prev, {
        id: prev.length + 1,
        sender: 'Вы',
        message: newMessage,
        time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
      }]);
      setNewMessage('');
    }
  };

  const profileStats = {
    profileViews: 324,
    applications: 12,
    interviews: 5,
    offers: 2,
    savedJobs: 18,
    skillsMatched: 85
  };

  if (currentView === 'profile') {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Profile Header */}
        <header className="bg-gradient-to-r from-primary to-accent text-white">
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-between">
              <Button 
                variant="ghost" 
                onClick={() => setCurrentView('home')}
                className="text-white hover:bg-white/20"
              >
                <Icon name="ArrowLeft" size={20} className="mr-2" />
                Назад
              </Button>
              <h1 className="text-2xl font-bold">Мой профиль</h1>
              <div></div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Profile Info */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6 text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src="" />
                    <AvatarFallback className="text-2xl bg-primary text-white">АП</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold mb-2">Алексей Петров</h3>
                  <p className="text-gray-600 mb-4">Senior Frontend Developer</p>
                  <Badge className="mb-4">Ищу работу</Badge>
                  
                  <div className="space-y-3 text-left">
                    <div className="flex items-center space-x-2">
                      <Icon name="MapPin" size={16} />
                      <span>Москва</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Mail" size={16} />
                      <span>alex@example.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Calendar" size={16} />
                      <span>5+ лет опыта</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Skills */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Навыки</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>React</span>
                        <span>95%</span>
                      </div>
                      <Progress value={95} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>TypeScript</span>
                        <span>90%</span>
                      </div>
                      <Progress value={90} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Node.js</span>
                        <span>80%</span>
                      </div>
                      <Progress value={80} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Python</span>
                        <span>70%</span>
                      </div>
                      <Progress value={70} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Stats & Activity */}
            <div className="lg:col-span-2 space-y-6">
              {/* Stats Grid */}
              <div className="grid md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{profileStats.profileViews}</div>
                    <div className="text-sm text-gray-600">Просмотры профиля</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-accent mb-2">{profileStats.applications}</div>
                    <div className="text-sm text-gray-600">Отклики</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-green-500 mb-2">{profileStats.interviews}</div>
                    <div className="text-sm text-gray-600">Собеседования</div>
                  </CardContent>
                </Card>
              </div>

              {/* Activity Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Активность поиска работы</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Отклики за неделю</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{width: '60%'}}></div>
                        </div>
                        <span className="text-sm">6/10</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Просмотры вакансий</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div className="bg-accent h-2 rounded-full" style={{width: '80%'}}></div>
                        </div>
                        <span className="text-sm">24/30</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Обновления профиля</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '40%'}}></div>
                        </div>
                        <span className="text-sm">2/5</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Applications */}
              <Card>
                <CardHeader>
                  <CardTitle>Последние отклики</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {jobs.slice(0, 3).map((job) => (
                      <div key={job.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{job.logo}</span>
                          <div>
                            <div className="font-semibold">{job.title}</div>
                            <div className="text-sm text-gray-600">{job.company}</div>
                          </div>
                        </div>
                        <Badge variant={job.id === 1 ? 'default' : job.id === 2 ? 'secondary' : 'outline'}>
                          {job.id === 1 ? 'Рассматривается' : job.id === 2 ? 'Интервью' : 'Отправлено'}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recommendations */}
              <Card>
                <CardHeader>
                  <CardTitle>🎯 Рекомендации для улучшения профиля</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                      <Icon name="AlertCircle" size={16} className="text-yellow-600" />
                      <span>Добавьте описание к последнему проекту для повышения рейтинга</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                      <Icon name="TrendingUp" size={16} className="text-blue-600" />
                      <span>Изучите Docker - востребованный навык в 87% вакансий</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <Icon name="Users" size={16} className="text-green-600" />
                      <span>Получите рекомендации от коллег для увеличения доверия</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
              <button 
                onClick={() => setCurrentView('home')} 
                className={`transition-colors ${currentView === 'home' ? 'text-white' : 'text-white/80 hover:text-white'}`}
              >
                Вакансии
              </button>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Компании</a>
              <button 
                onClick={() => setCurrentView('profile')} 
                className={`transition-colors ${currentView === 'profile' ? 'text-white' : 'text-white/80 hover:text-white'}`}
              >
                Профиль
              </button>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Блог</a>
            </nav>
            <div className="flex items-center space-x-3">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    Чат
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle className="flex items-center space-x-2">
                      <Icon name="MessageCircle" size={20} />
                      <span>Чат с HR</span>
                    </SheetTitle>
                  </SheetHeader>
                  
                  <div className="flex flex-col h-full mt-6">
                    <ScrollArea className="flex-1 pr-4">
                      <div className="space-y-4">
                        {chatMessages.map((msg) => (
                          <div key={msg.id} className={`flex ${msg.sender === 'Вы' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-xs p-3 rounded-lg ${msg.sender === 'Вы' ? 'bg-primary text-white' : 'bg-gray-100'}`}>
                              <div className="text-sm font-semibold mb-1">{msg.sender}</div>
                              <div>{msg.message}</div>
                              <div className="text-xs opacity-70 mt-1">{msg.time}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                    
                    <div className="flex space-x-2 mt-4 pt-4 border-t">
                      <Textarea 
                        placeholder="Введите сообщение..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        className="resize-none"
                        rows={2}
                      />
                      <Button onClick={sendMessage}>
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
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => setSelectedJob(job)}
                          >
                            Подробнее
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="flex items-center space-x-3">
                              <span className="text-3xl">{job.logo}</span>
                              <div>
                                <div className="text-xl">{job.title}</div>
                                <div className="text-lg text-primary font-semibold">{job.company}</div>
                              </div>
                            </DialogTitle>
                          </DialogHeader>
                          
                          <div className="space-y-6">
                            {/* Job Info */}
                            <div className="grid grid-cols-3 gap-4">
                              <div className="flex items-center space-x-2">
                                <Icon name="MapPin" size={16} />
                                <span>{job.location}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Icon name="Banknote" size={16} />
                                <span>{job.salary}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Icon name="Clock" size={16} />
                                <span>{job.type}</span>
                              </div>
                            </div>

                            {/* Match Score */}
                            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-lg">
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-semibold">Совпадение с вашим профилем</span>
                                <span className="text-2xl font-bold text-primary">{job.match}%</span>
                              </div>
                              <Progress value={job.match} className="h-2" />
                            </div>

                            {/* Description */}
                            <div>
                              <h4 className="font-semibold mb-2">О вакансии</h4>
                              <p className="text-gray-600">{job.id === 1 ? job.description : 'Описание вакансии будет добавлено позже.'}</p>
                            </div>

                            {/* Requirements */}
                            {job.id === 1 && (
                              <div>
                                <h4 className="font-semibold mb-2">Требования</h4>
                                <ul className="space-y-1">
                                  {job.requirements?.map((req: string, idx: number) => (
                                    <li key={idx} className="flex items-center space-x-2">
                                      <Icon name="Check" size={16} className="text-green-500" />
                                      <span>{req}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Responsibilities */}
                            {job.id === 1 && (
                              <div>
                                <h4 className="font-semibold mb-2">Обязанности</h4>
                                <ul className="space-y-1">
                                  {job.responsibilities?.map((resp: string, idx: number) => (
                                    <li key={idx} className="flex items-center space-x-2">
                                      <Icon name="ArrowRight" size={16} className="text-primary" />
                                      <span>{resp}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Benefits */}
                            {job.id === 1 && (
                              <div>
                                <h4 className="font-semibold mb-2">Что мы предлагаем</h4>
                                <ul className="space-y-1">
                                  {job.benefits?.map((benefit: string, idx: number) => (
                                    <li key={idx} className="flex items-center space-x-2">
                                      <Icon name="Star" size={16} className="text-yellow-500" />
                                      <span>{benefit}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Skills */}
                            <div>
                              <h4 className="font-semibold mb-2">Технологии</h4>
                              <div className="flex flex-wrap gap-2">
                                {job.skills.map((skill: string, idx: number) => (
                                  <Badge key={idx} variant="outline">{skill}</Badge>
                                ))}
                              </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex space-x-4 pt-4">
                              <Button className="flex-1">
                                <Icon name="Send" size={16} className="mr-2" />
                                Откликнуться
                              </Button>
                              <Button variant="outline">
                                <Icon name="Heart" size={16} className="mr-2" />
                                Сохранить
                              </Button>
                              <Button variant="outline">
                                <Icon name="MessageCircle" size={16} className="mr-2" />
                                Чат с HR
                              </Button>
                            </div>
                          </div>
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
    </div>
  );
};

export default Index;