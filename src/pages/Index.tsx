import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "ИИ-Ассистент 24/7",
      description: "Обрабатывает заявки в мессенджерах, соц.сетях, CRM и на сайте. Работает как живой человек!",
      icon: "Bot",
      features: ["Знает ваш товар", "Техника продаж", "Отработка возражений", "Расчет стоимости"]
    },
    {
      title: "Продвижение на Авито",
      description: "Заводим магазин или личный бренд на Авито и создаем стабильный трафик клиентов.",
      icon: "TrendingUp",
      features: ["Упаковка бренда", "Настройка магазина", "Стабильный трафик", "Рост продаж"]
    },
    {
      title: "Лидогенерация",
      description: "Передаем готовые квалифицированные лиды. Увеличиваем конверсии на всех этапах воронки.",
      icon: "Target",
      features: ["Квалифицированные лиды", "Дожимные рассылки", "Рост конверсий", "Аналитика"]
    }
  ];

  const tariffs = [
    {
      name: "СТАРТ",
      price: "от 30 000₽",
      period: "в месяц",
      features: ["Базовый ИИ-ассистент", "1 канал подключения", "Базовая аналитика", "Email поддержка"],
      popular: false
    },
    {
      name: "БИЗНЕС",
      price: "от 75 000₽", 
      period: "в месяц",
      features: ["Продвинутый ИИ-ассистент", "5 каналов подключения", "Продвинутая аналитика", "CRM интеграция", "Приоритетная поддержка"],
      popular: true
    },
    {
      name: "КОРПОРАТ",
      price: "от 150 000₽",
      period: "в месяц", 
      features: ["Полный функционал", "Неограниченные каналы", "Персональный менеджер", "Индивидуальные настройки", "24/7 поддержка"],
      popular: false
    }
  ];

  const cases = [
    {
      title: "Интернет-магазин одежды",
      result: "Рост продаж на 340%",
      description: "ИИ-ассистент обрабатывал 500+ заявок в день, консультировал по размерам и стилям",
      metrics: { conversion: "+85%", leads: "2000+", revenue: "15М₽" }
    },
    {
      title: "Сеть автосервисов",
      result: "Снижение затрат на персонал на 60%",
      description: "Автоматизация записи на сервис, консультации по ремонту, обработка возражений",
      metrics: { efficiency: "+200%", calls: "10000+", savings: "5М₽" }
    },
    {
      title: "IT-компания",
      result: "Увеличение качественных лидов в 5 раз",
      description: "Квалификация лидов по техническим параметрам, предварительные консультации",
      metrics: { leads: "+400%", quality: "95%", closing: "+150%" }
    }
  ];

  return (
    <div className="min-h-screen bg-brand-black text-brand-white font-body overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-brand-black/90 backdrop-blur-md border-b-4 border-brand-pink">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="https://cdn.poehali.dev/files/1a44fc4a-68e1-418d-9685-a5d54cf33dcc.png" 
              alt="Акула Ай Лаб" 
              className="h-8"
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="hover:text-brand-pink transition-colors font-accent text-lg">УСЛУГИ</a>
            <a href="#cases" className="hover:text-brand-pink transition-colors font-accent text-lg">КЕЙСЫ</a>
            <a href="#pricing" className="hover:text-brand-pink transition-colors font-accent text-lg">ТАРИФЫ</a>
            <a href="#contact" className="hover:text-brand-pink transition-colors font-accent text-lg">КОНТАКТЫ</a>
          </div>
          <Button className="bg-brand-deep hover:bg-brand-purple rounded-brutal border-4 border-brand-pink font-display text-lg px-8 py-3">
            ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
          </Button>
        </nav>
      </header>

      {/* Hero Section with 3D Robot */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-deep via-brand-purple to-brand-black opacity-90"></div>
        
        {/* Animated 3D Robot */}
        <div 
          className="absolute top-1/4 right-10 animate-float"
          style={{
            transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.1}deg)`
          }}
        >
          <div className="relative">
            <div className="w-32 h-40 bg-gradient-to-b from-brand-pink to-brand-purple rounded-brutal animate-pulse-glow border-4 border-brand-white">
              {/* Robot Head */}
              <div className="w-24 h-24 bg-brand-deep rounded-brutal border-4 border-brand-pink mx-auto mb-2 relative animate-bounce-in">
                <div className="w-6 h-6 bg-brand-pink rounded-full absolute top-4 left-4 animate-pulse"></div>
                <div className="w-6 h-6 bg-brand-pink rounded-full absolute top-4 right-4 animate-pulse"></div>
                <div className="w-12 h-4 bg-brand-white rounded-brutal absolute bottom-2 left-1/2 transform -translate-x-1/2"></div>
              </div>
              {/* Robot Body */}
              <div className="w-20 h-12 bg-brand-purple rounded-brutal border-2 border-brand-white mx-auto">
                <div className="w-16 h-2 bg-brand-pink rounded-brutal mx-auto mt-2"></div>
                <div className="w-12 h-2 bg-brand-pink rounded-brutal mx-auto mt-2"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <h1 className="font-display text-6xl md:text-8xl font-black mb-8 animate-fade-in">
            <span className="text-brand-pink">ИИ-АССИСТЕНТ</span><br/>
            <span className="text-brand-white">24/7</span><br/>
            <span className="text-brand-purple">ДЛЯ ВАШЕГО</span><br/>
            <span className="text-brand-deep bg-brand-pink px-4 py-2 rounded-brutal border-4 border-brand-white">БИЗНЕСА</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up font-body">
            Обрабатывает весь поток заявок в мессенджерах, соц.сетях, CRM. 
            Работает как живой человек! Знает ваш товар, умеет продавать и делать расчеты.
            <span className="text-brand-pink font-bold"> Никогда не устает и не подведет!</span>
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center animate-bounce-in">
            <Button className="bg-brand-pink hover:bg-brand-deep text-brand-black hover:text-brand-white font-display text-xl px-12 py-6 rounded-brutal border-4 border-brand-white hover:border-brand-pink transition-all duration-300 transform hover:scale-105">
              <Icon name="Rocket" className="mr-3" />
              ЗАПУСТИТЬ ИИ-АССИСТЕНТА
            </Button>
            <Button variant="outline" className="border-4 border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-brand-black font-display text-xl px-12 py-6 rounded-brutal transition-all duration-300">
              <Icon name="Play" className="mr-3" />
              ПОСМОТРЕТЬ ДЕМО
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in">
            <div className="text-center">
              <div className="text-4xl font-display text-brand-pink mb-2">500+</div>
              <div className="text-sm font-body">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display text-brand-pink mb-2">24/7</div>
              <div className="text-sm font-body">Работа без выходных</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display text-brand-pink mb-2">95%</div>
              <div className="text-sm font-body">Точность распознавания</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display text-brand-pink mb-2">3x</div>
              <div className="text-sm font-body">Рост конверсии</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-brand-deep">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-5xl md:text-7xl text-center mb-16 text-brand-white">
            НАШИ <span className="text-brand-pink">УСЛУГИ</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-brand-black border-4 border-brand-pink rounded-brutal hover:animate-pulse-glow transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 bg-brand-pink rounded-brutal flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={32} className="text-brand-black" />
                  </div>
                  <CardTitle className="font-display text-2xl text-brand-white">{service.title}</CardTitle>
                  <CardDescription className="text-brand-white/80 font-body text-lg">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <Icon name="Check" className="text-brand-pink mr-2" size={16} />
                        <span className="text-brand-white/90">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 bg-brand-purple">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-5xl md:text-7xl text-center mb-16 text-brand-white">
            КЕЙСЫ <span className="text-brand-pink">КЛИЕНТОВ</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((case_, index) => (
              <Card key={index} className="bg-brand-black border-4 border-brand-pink rounded-brutal overflow-hidden">
                <CardHeader>
                  <Badge className="w-fit bg-brand-pink text-brand-black font-display text-sm mb-4">
                    КЕЙС #{index + 1}
                  </Badge>
                  <CardTitle className="font-display text-xl text-brand-white">{case_.title}</CardTitle>
                  <div className="text-3xl font-display text-brand-pink mt-2">{case_.result}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-white/80 mb-4">{case_.description}</p>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {Object.entries(case_.metrics).map(([key, value]) => (
                      <div key={key} className="bg-brand-deep p-2 rounded-brutal border-2 border-brand-pink">
                        <div className="text-brand-pink font-display text-lg">{value}</div>
                        <div className="text-brand-white/60 text-xs uppercase">{key}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-brand-black">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-5xl md:text-7xl text-center mb-16 text-brand-white">
            ТАРИФЫ <span className="text-brand-pink">&</span> ЦЕНЫ
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {tariffs.map((tariff, index) => (
              <Card key={index} className={`${tariff.popular ? 'border-4 border-brand-pink scale-110 bg-brand-deep' : 'border-4 border-brand-purple bg-brand-black'} rounded-brutal relative overflow-hidden`}>
                {tariff.popular && (
                  <div className="absolute top-0 right-0 bg-brand-pink text-brand-black px-4 py-1 font-display text-sm">
                    ПОПУЛЯРНЫЙ
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="font-display text-3xl text-brand-white mb-2">{tariff.name}</CardTitle>
                  <div className="text-4xl font-display text-brand-pink">{tariff.price}</div>
                  <div className="text-brand-white/60">{tariff.period}</div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {tariff.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <Icon name="Check" className="text-brand-pink mr-3" size={20} />
                        <span className="text-brand-white">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className={`w-full ${tariff.popular ? 'bg-brand-pink hover:bg-brand-white text-brand-black' : 'bg-brand-purple hover:bg-brand-pink text-brand-white hover:text-brand-black'} font-display text-lg py-3 rounded-brutal border-4 border-brand-white transition-all duration-300`}>
                    ВЫБРАТЬ ТАРИФ
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-brand-white/80 mb-4">Работаем по договору. Есть рассрочка без % от банка-партнера</p>
            <Button variant="outline" className="border-4 border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-brand-black font-display text-lg px-8 py-4 rounded-brutal">
              <Icon name="Calculator" className="mr-2" />
              РАССЧИТАТЬ ИНДИВИДУАЛЬНУЮ СТОИМОСТЬ
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-brand-deep">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-5xl md:text-6xl mb-8 text-brand-white">
                О <span className="text-brand-pink">КОМПАНИИ</span>
              </h2>
              <div className="space-y-6 text-lg text-brand-white/90">
                <p>
                  <strong className="text-brand-pink">Акула Ай Лаб</strong> — ведущее агентство по ИИ-автоматизации и лидогенерации. 
                  Мы создаем интеллектуальных ассистентов, которые работают эффективнее человека.
                </p>
                <p>
                  Наш ИИ-ассистент может выступить как специалист заботы, продавец, администратор или консультант. 
                  Он помнит каждого клиента и делает умные дожимные рассылки.
                </p>
                <div className="bg-brand-black p-6 rounded-brutal border-4 border-brand-pink">
                  <h3 className="font-display text-2xl text-brand-pink mb-4">ПРЕИМУЩЕСТВА:</h3>
                  <ul className="space-y-2">
                    <li>✓ Повышает конверсию в квал.лида и сделку</li>
                    <li>✓ Сокращает фонд заработной платы</li>
                    <li>✓ Окупается и работает в плюс</li>
                    <li>✓ Постоянная техподдержка</li>
                    <li>✓ Актуализация знаний о товаре</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-brand-pink p-8 rounded-brutal border-4 border-brand-white transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-display text-brand-black mb-2">5+ лет</div>
                    <div className="text-brand-black/80">на рынке</div>
                  </div>
                  <div>
                    <div className="text-4xl font-display text-brand-black mb-2">1000+</div>
                    <div className="text-brand-black/80">проектов</div>
                  </div>
                  <div>
                    <div className="text-4xl font-display text-brand-black mb-2">50+</div>
                    <div className="text-brand-black/80">экспертов</div>
                  </div>
                  <div>
                    <div className="text-4xl font-display text-brand-black mb-2">99%</div>
                    <div className="text-brand-black/80">удовлетворенности</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-brand-black">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-5xl md:text-7xl text-center mb-16 text-brand-white">
            СВЯЖИТЕСЬ <span className="text-brand-pink">С НАМИ</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-brand-deep p-8 rounded-brutal border-4 border-brand-pink">
                <h3 className="font-display text-3xl text-brand-pink mb-6">НАЧНИТЕ ПРЯМО СЕЙЧАС!</h3>
                <p className="text-xl text-brand-white mb-6">
                  Получите бесплатную консультацию и узнайте, как ИИ-ассистент увеличит ваши продажи
                </p>
                <div className="space-y-4">
                  <Button className="w-full bg-brand-pink hover:bg-brand-white text-brand-black font-display text-xl py-4 rounded-brutal border-4 border-brand-white">
                    <Icon name="Phone" className="mr-3" />
                    ЗАКАЗАТЬ ЗВОНОК
                  </Button>
                  <Button variant="outline" className="w-full border-4 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-brand-white font-display text-xl py-4 rounded-brutal">
                    <Icon name="MessageSquare" className="mr-3" />
                    НАПИСАТЬ В TELEGRAM
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-brand-purple p-6 rounded-brutal border-4 border-brand-pink text-center">
                  <Icon name="Clock" className="mx-auto mb-2 text-brand-pink" size={32} />
                  <div className="font-display text-lg text-brand-white">Ответим за</div>
                  <div className="text-2xl font-display text-brand-pink">15 минут</div>
                </div>
                <div className="bg-brand-purple p-6 rounded-brutal border-4 border-brand-pink text-center">
                  <Icon name="Shield" className="mx-auto mb-2 text-brand-pink" size={32} />
                  <div className="font-display text-lg text-brand-white">Гарантия</div>
                  <div className="text-2xl font-display text-brand-pink">100%</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-brand-deep border-4 border-brand-purple rounded-brutal">
                <CardHeader>
                  <CardTitle className="font-display text-2xl text-brand-white flex items-center">
                    <Icon name="MapPin" className="mr-3 text-brand-pink" />
                    ОФИС В МОСКВЕ
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-brand-white/80">
                  <p>ул. Примерная, д. 123, оф. 456</p>
                  <p>Работаем: Пн-Пт 9:00-18:00</p>
                </CardContent>
              </Card>

              <Card className="bg-brand-deep border-4 border-brand-purple rounded-brutal">
                <CardHeader>
                  <CardTitle className="font-display text-2xl text-brand-white flex items-center">
                    <Icon name="Phone" className="mr-3 text-brand-pink" />
                    ТЕЛЕФОНЫ
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-brand-white/80 space-y-2">
                  <p>+7 (999) 123-45-67</p>
                  <p>+7 (999) 987-65-43</p>
                  <p className="text-brand-pink">Звонки бесплатны по России</p>
                </CardContent>
              </Card>

              <Card className="bg-brand-deep border-4 border-brand-purple rounded-brutal">
                <CardHeader>
                  <CardTitle className="font-display text-2xl text-brand-white flex items-center">
                    <Icon name="Mail" className="mr-3 text-brand-pink" />
                    EMAIL
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-brand-white/80">
                  <p>hello@akulaai.ru</p>
                  <p>info@akulaai.ru</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-deep border-t-4 border-brand-pink py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/1a44fc4a-68e1-418d-9685-a5d54cf33dcc.png" 
                alt="Акула Ай Лаб" 
                className="h-10 mb-4"
              />
              <p className="text-brand-white/60">
                ИИ-автоматизация и лидогенерация для вашего бизнеса
              </p>
            </div>
            
            <div>
              <h4 className="font-display text-lg text-brand-pink mb-4">УСЛУГИ</h4>
              <ul className="space-y-2 text-brand-white/80">
                <li>ИИ-Ассистент</li>
                <li>Лидогенерация</li>
                <li>Авито продвижение</li>
                <li>CRM интеграция</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-display text-lg text-brand-pink mb-4">КОМПАНИЯ</h4>
              <ul className="space-y-2 text-brand-white/80">
                <li>О нас</li>
                <li>Кейсы</li>
                <li>Контакты</li>
                <li>Вакансии</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-display text-lg text-brand-pink mb-4">ПОДДЕРЖКА</h4>
              <ul className="space-y-2 text-brand-white/80">
                <li>Документация</li>
                <li>FAQ</li>
                <li>Техподдержка</li>
                <li>Обучение</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-brand-purple pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-brand-white/60">© 2024 Акула Ай Лаб. Все права защищены.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-brand-white/60">Следите за нами:</span>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="text-brand-pink hover:text-brand-white">
                  <Icon name="MessageSquare" size={20} />
                </Button>
                <Button size="sm" variant="ghost" className="text-brand-pink hover:text-brand-white">
                  <Icon name="Phone" size={20} />
                </Button>
                <Button size="sm" variant="ghost" className="text-brand-pink hover:text-brand-white">
                  <Icon name="Mail" size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}