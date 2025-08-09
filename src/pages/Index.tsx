import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const services = [
    {
      title: "ИИ-Ассистент 24/7",
      description: "Обрабатывает заявки в мессенджерах, соц.сетях, CRM и на сайте. Работает как живой человек!",
      icon: "Bot",
      emoji: "🤖",
      features: ["Знает ваш товар", "Техника продаж", "Отработка возражений", "Расчет стоимости"]
    },
    {
      title: "Продвижение на Авито",
      description: "Заводим магазин или личный бренд на Авито и создаем стабильный трафик клиентов.",
      icon: "TrendingUp",
      emoji: "🚀",
      features: ["Упаковка бренда", "Настройка магазина", "Стабильный трафик", "Рост продаж"]
    },
    {
      title: "Лидогенерация",
      description: "Передаем готовые квалифицированные лиды. Увеличиваем конверсии на всех этапах воронки.",
      icon: "Target",
      emoji: "💰",
      features: ["Квалифицированные лиды", "Дожимные рассылки", "Рост конверсий", "Аналитика"]
    }
  ];

  const tariffs = [
    {
      name: "СТАРТ",
      price: "от 30 000₽",
      period: "в месяц",
      emoji: "🌱",
      features: ["Базовый ИИ-ассистент", "1 канал подключения", "Базовая аналитика", "Email поддержка"],
      popular: false
    },
    {
      name: "БИЗНЕС",
      price: "от 75 000₽", 
      period: "в месяц",
      emoji: "⭐",
      features: ["Продвинутый ИИ-ассистент", "5 каналов подключения", "Продвинутая аналитика", "CRM интеграция", "Приоритетная поддержка"],
      popular: true
    },
    {
      name: "КОРПОРАТ",
      price: "от 150 000₽",
      period: "в месяц",
      emoji: "👑", 
      features: ["Полный функционал", "Неограниченные каналы", "Персональный менеджер", "Индивидуальные настройки", "24/7 поддержка"],
      popular: false
    }
  ];

  const cases = [
    {
      title: "Интернет-магазин одежды",
      result: "Рост продаж на 340%",
      description: "ИИ-ассистент обрабатывал 500+ заявок в день, консультировал по размерам и стилям",
      metrics: { conversion: "+85%", leads: "2000+", revenue: "15М₽" },
      emoji: "👗"
    },
    {
      title: "Сеть автосервисов",
      result: "Снижение затрат на персонал на 60%",
      description: "Автоматизация записи на сервис, консультации по ремонту, обработка возражений",
      metrics: { efficiency: "+200%", calls: "10000+", savings: "5М₽" },
      emoji: "🚗"
    },
    {
      title: "IT-компания",
      result: "Увеличение качественных лидов в 5 раз",
      description: "Квалификация лидов по техническим параметрам, предварительные консультации",
      metrics: { leads: "+400%", quality: "95%", closing: "+150%" },
      emoji: "💻"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-black text-brand-white font-body overflow-x-hidden relative">
      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-brand-pink rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Cursor follower */}
      <div 
        className="fixed w-8 h-8 bg-brand-pink/20 rounded-full pointer-events-none z-50 transition-all duration-75"
        style={{
          left: mousePos.x - 16,
          top: mousePos.y - 16,
          transform: `scale(${Math.sin(scrollY * 0.01) * 0.5 + 1})`
        }}
      />

      {/* Header */}
      <header className="fixed top-0 w-full z-40 bg-brand-black/90 backdrop-blur-md border-b-4 border-brand-pink">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="https://cdn.poehali.dev/files/1a44fc4a-68e1-418d-9685-a5d54cf33dcc.png" 
              alt="Акула Ай Лаб" 
              className="h-8 hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="hover:text-brand-pink transition-colors font-accent text-lg relative group">
              УСЛУГИ
              <div className="absolute -bottom-1 left-0 w-0 h-1 bg-brand-pink transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#cases" className="hover:text-brand-pink transition-colors font-accent text-lg relative group">
              КЕЙСЫ
              <div className="absolute -bottom-1 left-0 w-0 h-1 bg-brand-pink transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#pricing" className="hover:text-brand-pink transition-colors font-accent text-lg relative group">
              ТАРИФЫ
              <div className="absolute -bottom-1 left-0 w-0 h-1 bg-brand-pink transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#contact" className="hover:text-brand-pink transition-colors font-accent text-lg relative group">
              КОНТАКТЫ
              <div className="absolute -bottom-1 left-0 w-0 h-1 bg-brand-pink transition-all duration-300 group-hover:w-full"></div>
            </a>
          </div>
          <Button className="bg-brand-deep hover:bg-brand-purple rounded-brutal border-4 border-brand-pink font-display text-lg px-8 py-3 hover:scale-105 transition-all duration-300">
            ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ ⚡
          </Button>
        </nav>
      </header>

      {/* Hero Section with 3D Robot */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Dynamic background */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(/img/198fb743-8af3-489f-ab89-88390e67b5e8.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-deep via-brand-purple to-brand-black opacity-90"></div>
        
        {/* Animated geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-brand-pink/20 rotate-45 animate-bounce-in"></div>
        <div className="absolute bottom-40 right-20 w-16 h-16 bg-brand-purple/30 rounded-full animate-pulse-glow"></div>
        <div className="absolute top-60 right-40 w-12 h-12 bg-brand-deep/40 transform rotate-12 animate-rotate-slow"></div>

        {/* Animated 3D Robot */}
        <div 
          className="absolute top-1/4 right-10 animate-float hover:scale-110 transition-transform duration-300"
          style={{
            transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.1}deg)`
          }}
        >
          <div className="relative cursor-pointer">
            <div className="w-32 h-40 bg-gradient-to-b from-brand-pink to-brand-purple rounded-brutal animate-pulse-glow border-4 border-brand-white shadow-2xl">
              {/* Robot Head */}
              <div className="w-24 h-24 bg-brand-deep rounded-brutal border-4 border-brand-pink mx-auto mb-2 relative animate-bounce-in">
                <div className="w-6 h-6 bg-brand-pink rounded-full absolute top-4 left-4 animate-pulse shadow-lg"></div>
                <div className="w-6 h-6 bg-brand-pink rounded-full absolute top-4 right-4 animate-pulse shadow-lg"></div>
                <div className="w-12 h-4 bg-brand-white rounded-brutal absolute bottom-2 left-1/2 transform -translate-x-1/2"></div>
                {/* Speech bubble */}
                <div className="absolute -top-8 -right-16 bg-brand-pink text-brand-black px-2 py-1 rounded-brutal text-xs font-display opacity-0 hover:opacity-100 transition-opacity">
                  Привет! 👋
                </div>
              </div>
              {/* Robot Body */}
              <div className="w-20 h-12 bg-brand-purple rounded-brutal border-2 border-brand-white mx-auto">
                <div className="w-16 h-2 bg-brand-pink rounded-brutal mx-auto mt-2 animate-pulse"></div>
                <div className="w-12 h-2 bg-brand-pink rounded-brutal mx-auto mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <div className="text-6xl mb-4 animate-bounce-in">🚀</div>
            <h1 className="font-display text-6xl md:text-8xl font-black mb-8 animate-fade-in">
              <span className="text-brand-pink drop-shadow-lg">ИИ-АССИСТЕНТ</span><br/>
              <span className="text-brand-white">24/7</span><br/>
              <span className="text-brand-purple">ДЛЯ ВАШЕГО</span><br/>
              <span className="text-brand-deep bg-brand-pink px-4 py-2 rounded-brutal border-4 border-brand-white shadow-2xl hover:animate-pulse-glow transition-all duration-300">БИЗНЕСА</span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up font-body">
            Обрабатывает весь поток заявок в мессенджерах, соц.сетях, CRM. 
            Работает как живой человек! Знает ваш товар, умеет продавать и делать расчеты.
            <span className="text-brand-pink font-bold"> Никогда не устает и не подведет! 🤖💪</span>
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center animate-bounce-in mb-16">
            <Button className="bg-brand-pink hover:bg-brand-deep text-brand-black hover:text-brand-white font-display text-xl px-12 py-6 rounded-brutal border-4 border-brand-white hover:border-brand-pink transition-all duration-300 transform hover:scale-105 hover:rotate-1 shadow-2xl">
              <Icon name="Rocket" className="mr-3" />
              ЗАПУСТИТЬ ИИ-АССИСТЕНТА 🔥
            </Button>
            <Button variant="outline" className="border-4 border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-brand-black font-display text-xl px-12 py-6 rounded-brutal transition-all duration-300 hover:scale-105 hover:-rotate-1 shadow-xl">
              <Icon name="Play" className="mr-3" />
              ПОСМОТРЕТЬ ДЕМО 🎬
            </Button>
          </div>

          {/* Creative stats with emojis */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in">
            <div className="text-center bg-brand-deep/50 rounded-brutal p-6 border-2 border-brand-pink/30 hover:scale-110 transition-transform duration-300">
              <div className="text-3xl mb-2">🎯</div>
              <div className="text-4xl font-display text-brand-pink mb-2">500+</div>
              <div className="text-sm font-body">Довольных клиентов</div>
            </div>
            <div className="text-center bg-brand-deep/50 rounded-brutal p-6 border-2 border-brand-pink/30 hover:scale-110 transition-transform duration-300">
              <div className="text-3xl mb-2">⏰</div>
              <div className="text-4xl font-display text-brand-pink mb-2">24/7</div>
              <div className="text-sm font-body">Работа без выходных</div>
            </div>
            <div className="text-center bg-brand-deep/50 rounded-brutal p-6 border-2 border-brand-pink/30 hover:scale-110 transition-transform duration-300">
              <div className="text-3xl mb-2">🎪</div>
              <div className="text-4xl font-display text-brand-pink mb-2">95%</div>
              <div className="text-sm font-body">Точность распознавания</div>
            </div>
            <div className="text-center bg-brand-deep/50 rounded-brutal p-6 border-2 border-brand-pink/30 hover:scale-110 transition-transform duration-300">
              <div className="text-3xl mb-2">📈</div>
              <div className="text-4xl font-display text-brand-pink mb-2">3x</div>
              <div className="text-sm font-body">Рост конверсии</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-brand-deep relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(/img/5a0f31cf-96b0-4c42-b360-5985d7174736.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-brand-deep/80"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="font-display text-5xl md:text-7xl text-center mb-4 text-brand-white">
            НАШИ <span className="text-brand-pink">УСЛУГИ</span>
          </h2>
          <div className="text-center text-4xl mb-16 animate-bounce-in">🛠️⚡🎯</div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-brand-black border-4 border-brand-pink rounded-brutal hover:animate-pulse-glow transition-all duration-300 transform hover:-translate-y-4 hover:rotate-1 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 text-6xl opacity-10 group-hover:opacity-30 transition-opacity">
                  {service.emoji}
                </div>
                <CardHeader>
                  <div className="w-20 h-20 bg-brand-pink rounded-brutal flex items-center justify-center mb-4 hover:animate-bounce-in">
                    <div className="text-3xl">{service.emoji}</div>
                  </div>
                  <CardTitle className="font-display text-2xl text-brand-white group-hover:text-brand-pink transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-brand-white/80 font-body text-lg">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center bg-brand-deep/30 p-2 rounded-brutal">
                        <span className="text-brand-pink mr-3 text-lg">✨</span>
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
      <section id="cases" className="py-20 bg-brand-purple relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-r from-brand-deep via-transparent to-brand-pink"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="font-display text-5xl md:text-7xl text-center mb-4 text-brand-white">
            КЕЙСЫ <span className="text-brand-pink">КЛИЕНТОВ</span>
          </h2>
          <div className="text-center text-4xl mb-16 animate-bounce-in">🏆📊💎</div>

          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((case_, index) => (
              <Card key={index} className="bg-brand-black border-4 border-brand-pink rounded-brutal overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl relative group">
                <div className="absolute top-0 right-0 text-8xl opacity-10 group-hover:opacity-30 transition-opacity">
                  {case_.emoji}
                </div>
                <CardHeader>
                  <Badge className="w-fit bg-brand-pink text-brand-black font-display text-sm mb-4 hover:animate-bounce-in">
                    КЕЙС #{index + 1} {case_.emoji}
                  </Badge>
                  <CardTitle className="font-display text-xl text-brand-white group-hover:text-brand-pink transition-colors">
                    {case_.title}
                  </CardTitle>
                  <div className="text-3xl font-display text-brand-pink mt-2 animate-pulse">
                    {case_.result}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-white/80 mb-4">{case_.description}</p>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {Object.entries(case_.metrics).map(([key, value]) => (
                      <div key={key} className="bg-brand-deep p-3 rounded-brutal border-2 border-brand-pink hover:scale-110 transition-transform duration-200">
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
      <section id="pricing" className="py-20 bg-brand-black relative">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(/img/685e6c36-56d4-44b2-a13d-f0a1cf13d92d.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="font-display text-5xl md:text-7xl text-center mb-4 text-brand-white">
            ТАРИФЫ <span className="text-brand-pink">&</span> ЦЕНЫ
          </h2>
          <div className="text-center text-4xl mb-16 animate-bounce-in">💰🎁👑</div>

          <div className="grid md:grid-cols-3 gap-8">
            {tariffs.map((tariff, index) => (
              <Card key={index} className={`${tariff.popular ? 'border-4 border-brand-pink scale-110 bg-brand-deep shadow-2xl' : 'border-4 border-brand-purple bg-brand-black'} rounded-brutal relative overflow-hidden hover:scale-105 transition-all duration-300 group`}>
                {tariff.popular && (
                  <div className="absolute top-0 right-0 bg-brand-pink text-brand-black px-4 py-2 font-display text-sm animate-pulse-glow">
                    🔥 ПОПУЛЯРНЫЙ
                  </div>
                )}
                <div className="absolute top-4 left-4 text-6xl opacity-20 group-hover:opacity-50 transition-opacity">
                  {tariff.emoji}
                </div>
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-2">{tariff.emoji}</div>
                  <CardTitle className="font-display text-3xl text-brand-white mb-2">{tariff.name}</CardTitle>
                  <div className="text-4xl font-display text-brand-pink animate-pulse">{tariff.price}</div>
                  <div className="text-brand-white/60">{tariff.period}</div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {tariff.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center bg-brand-deep/30 p-2 rounded-brutal">
                        <span className="text-brand-pink mr-3 text-lg">⚡</span>
                        <span className="text-brand-white">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className={`w-full ${tariff.popular ? 'bg-brand-pink hover:bg-brand-white text-brand-black animate-pulse-glow' : 'bg-brand-purple hover:bg-brand-pink text-brand-white hover:text-brand-black'} font-display text-lg py-3 rounded-brutal border-4 border-brand-white transition-all duration-300 hover:scale-105`}>
                    ВЫБРАТЬ ТАРИФ {tariff.emoji}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 bg-brand-deep/50 rounded-brutal p-8 border-2 border-brand-pink/30">
            <div className="text-4xl mb-4">🏆</div>
            <p className="text-brand-white/80 mb-4">Работаем по договору. Есть рассрочка без % от банка-партнера</p>
            <Button variant="outline" className="border-4 border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-brand-black font-display text-lg px-8 py-4 rounded-brutal hover:scale-105 transition-all duration-300">
              <Icon name="Calculator" className="mr-2" />
              РАССЧИТАТЬ СТОИМОСТЬ 💸
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-brand-deep relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-brand-pink/10 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-brand-purple/20 transform rotate-45 animate-bounce-in"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-brand-deep/30 rounded-brutal animate-pulse-glow"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-5xl md:text-6xl mb-4 text-brand-white">
                О <span className="text-brand-pink">КОМПАНИИ</span>
              </h2>
              <div className="text-4xl mb-8">🦈🤖⚡</div>
              
              <div className="space-y-6 text-lg text-brand-white/90">
                <p className="bg-brand-black/30 p-4 rounded-brutal border-l-4 border-brand-pink">
                  <strong className="text-brand-pink">Акула Ай Лаб 🦈</strong> — ведущее агентство по ИИ-автоматизации и лидогенерации. 
                  Мы создаем интеллектуальных ассистентов, которые работают эффективнее человека.
                </p>
                <p className="bg-brand-black/30 p-4 rounded-brutal border-l-4 border-brand-purple">
                  Наш ИИ-ассистент может выступить как специалист заботы, продавец, администратор или консультант. 
                  Он помнит каждого клиента и делает умные дожимные рассылки. 🎯
                </p>
                <div className="bg-brand-black p-6 rounded-brutal border-4 border-brand-pink hover:scale-105 transition-transform duration-300">
                  <h3 className="font-display text-2xl text-brand-pink mb-4">ПРЕИМУЩЕСТВА: 🚀</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="text-2xl mr-3">📈</span>
                      <span>Повышает конверсию в квал.лида и сделку</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-2xl mr-3">💰</span>
                      <span>Сокращает фонд заработной платы</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-2xl mr-3">⚡</span>
                      <span>Окупается и работает в плюс</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-2xl mr-3">🛠️</span>
                      <span>Постоянная техподдержка</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-2xl mr-3">🧠</span>
                      <span>Актуализация знаний о товаре</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-brand-pink p-8 rounded-brutal border-4 border-brand-white transform rotate-3 hover:rotate-0 transition-transform duration-300 shadow-2xl">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="hover:scale-110 transition-transform duration-200">
                    <div className="text-2xl mb-2">⏳</div>
                    <div className="text-4xl font-display text-brand-black mb-2">5+ лет</div>
                    <div className="text-brand-black/80">на рынке</div>
                  </div>
                  <div className="hover:scale-110 transition-transform duration-200">
                    <div className="text-2xl mb-2">🎯</div>
                    <div className="text-4xl font-display text-brand-black mb-2">1000+</div>
                    <div className="text-brand-black/80">проектов</div>
                  </div>
                  <div className="hover:scale-110 transition-transform duration-200">
                    <div className="text-2xl mb-2">👥</div>
                    <div className="text-4xl font-display text-brand-black mb-2">50+</div>
                    <div className="text-brand-black/80">экспертов</div>
                  </div>
                  <div className="hover:scale-110 transition-transform duration-200">
                    <div className="text-2xl mb-2">⭐</div>
                    <div className="text-4xl font-display text-brand-black mb-2">99%</div>
                    <div className="text-brand-black/80">удовлетворенности</div>
                  </div>
                </div>
              </div>
              {/* Floating elements around stats */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-brand-purple rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-brand-deep transform rotate-45 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-brand-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-40 h-40 bg-brand-pink/5 rounded-full animate-pulse-glow"></div>
          <div className="absolute bottom-20 left-10 w-28 h-28 bg-brand-purple/10 transform rotate-12 animate-float"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="font-display text-5xl md:text-7xl text-center mb-4 text-brand-white">
            СВЯЖИТЕСЬ <span className="text-brand-pink">С НАМИ</span>
          </h2>
          <div className="text-center text-4xl mb-16 animate-bounce-in">📞💬🚀</div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-brand-deep p-8 rounded-brutal border-4 border-brand-pink hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 text-8xl opacity-10">🎯</div>
                <h3 className="font-display text-3xl text-brand-pink mb-6">НАЧНИТЕ ПРЯМО СЕЙЧАС! 🔥</h3>
                <p className="text-xl text-brand-white mb-6">
                  Получите бесплатную консультацию и узнайте, как ИИ-ассистент увеличит ваши продажи 📈
                </p>
                <div className="space-y-4">
                  <Button className="w-full bg-brand-pink hover:bg-brand-white text-brand-black font-display text-xl py-4 rounded-brutal border-4 border-brand-white hover:scale-105 transition-all duration-300">
                    <Icon name="Phone" className="mr-3" />
                    ЗАКАЗАТЬ ЗВОНОК 📞
                  </Button>
                  <Button variant="outline" className="w-full border-4 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-brand-white font-display text-xl py-4 rounded-brutal hover:scale-105 transition-all duration-300">
                    <Icon name="MessageSquare" className="mr-3" />
                    НАПИСАТЬ В TELEGRAM 💬
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-brand-purple p-6 rounded-brutal border-4 border-brand-pink text-center hover:scale-110 transition-transform duration-300 hover:animate-pulse-glow">
                  <div className="text-3xl mb-2">⏰</div>
                  <div className="font-display text-lg text-brand-white">Ответим за</div>
                  <div className="text-2xl font-display text-brand-pink">15 минут</div>
                </div>
                <div className="bg-brand-purple p-6 rounded-brutal border-4 border-brand-pink text-center hover:scale-110 transition-transform duration-300 hover:animate-pulse-glow">
                  <div className="text-3xl mb-2">🛡️</div>
                  <div className="font-display text-lg text-brand-white">Гарантия</div>
                  <div className="text-2xl font-display text-brand-pink">100%</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-brand-deep border-4 border-brand-purple rounded-brutal hover:scale-105 transition-transform duration-300 hover:animate-pulse-glow">
                <CardHeader>
                  <CardTitle className="font-display text-2xl text-brand-white flex items-center">
                    <span className="text-3xl mr-3">📍</span>
                    ОФИС В МОСКВЕ
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-brand-white/80">
                  <p>ул. Примерная, д. 123, оф. 456</p>
                  <p>Работаем: Пн-Пт 9:00-18:00 ⏰</p>
                </CardContent>
              </Card>

              <Card className="bg-brand-deep border-4 border-brand-purple rounded-brutal hover:scale-105 transition-transform duration-300 hover:animate-pulse-glow">
                <CardHeader>
                  <CardTitle className="font-display text-2xl text-brand-white flex items-center">
                    <span className="text-3xl mr-3">📱</span>
                    ТЕЛЕФОНЫ
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-brand-white/80 space-y-2">
                  <p>+7 (999) 123-45-67</p>
                  <p>+7 (999) 987-65-43</p>
                  <p className="text-brand-pink">Звонки бесплатны по России 🌟</p>
                </CardContent>
              </Card>

              <Card className="bg-brand-deep border-4 border-brand-purple rounded-brutal hover:scale-105 transition-transform duration-300 hover:animate-pulse-glow">
                <CardHeader>
                  <CardTitle className="font-display text-2xl text-brand-white flex items-center">
                    <span className="text-3xl mr-3">✉️</span>
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
      <footer className="bg-brand-deep border-t-4 border-brand-pink py-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-20 h-20 bg-brand-pink/10 rounded-full animate-float"></div>
          <div className="absolute bottom-0 right-1/3 w-16 h-16 bg-brand-purple/10 transform rotate-45 animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/1a44fc4a-68e1-418d-9685-a5d54cf33dcc.png" 
                  alt="Акула Ай Лаб" 
                  className="h-10 mr-3"
                />
                <span className="text-2xl">🦈</span>
              </div>
              <p className="text-brand-white/60">
                ИИ-автоматизация и лидогенерация для вашего бизнеса 🚀
              </p>
            </div>
            
            <div>
              <h4 className="font-display text-lg text-brand-pink mb-4 flex items-center">
                🛠️ УСЛУГИ
              </h4>
              <ul className="space-y-2 text-brand-white/80">
                <li className="hover:text-brand-pink transition-colors cursor-pointer">🤖 ИИ-Ассистент</li>
                <li className="hover:text-brand-pink transition-colors cursor-pointer">🎯 Лидогенерация</li>
                <li className="hover:text-brand-pink transition-colors cursor-pointer">🚀 Авито продвижение</li>
                <li className="hover:text-brand-pink transition-colors cursor-pointer">⚡ CRM интеграция</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-display text-lg text-brand-pink mb-4 flex items-center">
                🏢 КОМПАНИЯ
              </h4>
              <ul className="space-y-2 text-brand-white/80">
                <li className="hover:text-brand-pink transition-colors cursor-pointer">👋 О нас</li>
                <li className="hover:text-brand-pink transition-colors cursor-pointer">🏆 Кейсы</li>
                <li className="hover:text-brand-pink transition-colors cursor-pointer">📞 Контакты</li>
                <li className="hover:text-brand-pink transition-colors cursor-pointer">💼 Вакансии</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-display text-lg text-brand-pink mb-4 flex items-center">
                🆘 ПОДДЕРЖКА
              </h4>
              <ul className="space-y-2 text-brand-white/80">
                <li className="hover:text-brand-pink transition-colors cursor-pointer">📚 Документация</li>
                <li className="hover:text-brand-pink transition-colors cursor-pointer">❓ FAQ</li>
                <li className="hover:text-brand-pink transition-colors cursor-pointer">🛠️ Техподдержка</li>
                <li className="hover:text-brand-pink transition-colors cursor-pointer">🎓 Обучение</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-brand-purple pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-brand-white/60 flex items-center">
              © 2024 Акула Ай Лаб. Все права защищены. <span className="ml-2">🦈⚡</span>
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-brand-white/60">Следите за нами:</span>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="text-brand-pink hover:text-brand-white hover:scale-110 transition-all duration-200">
                  💬
                </Button>
                <Button size="sm" variant="ghost" className="text-brand-pink hover:text-brand-white hover:scale-110 transition-all duration-200">
                  📞
                </Button>
                <Button size="sm" variant="ghost" className="text-brand-pink hover:text-brand-white hover:scale-110 transition-all duration-200">
                  ✉️
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}