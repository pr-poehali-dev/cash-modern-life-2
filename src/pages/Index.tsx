
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';

// Данные о использовании наличных денег в странах (в процентах)
const cashUsageData = [
  { country: 'Япония', percentage: 82 },
  { country: 'Германия', percentage: 75 },
  { country: 'Италия', percentage: 71 },
  { country: 'США', percentage: 45 },
  { country: 'Франция', percentage: 40 },
  { country: 'Канада', percentage: 30 },
  { country: 'Великобритания', percentage: 25 },
  { country: 'Швеция', percentage: 13 },
];

// Компонент для страницы о наличных деньгах
const Index = () => {
  const [activeTab, setActiveTab] = useState('history');

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Заголовок страницы */}
      <header className="bg-gray-700 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold mb-4">Наличные деньги в современной жизни</h1>
          <p className="text-xl text-gray-200">История, использование и роль наличных денег в цифровую эпоху</p>
        </div>
      </header>

      {/* Основной контент */}
      <main className="container mx-auto max-w-6xl py-8 px-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="history">История</TabsTrigger>
            <TabsTrigger value="terms">Термины и виды</TabsTrigger>
            <TabsTrigger value="usage">Использование</TabsTrigger>
            <TabsTrigger value="comparison">Сравнение</TabsTrigger>
          </TabsList>

          {/* Вкладка истории */}
          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="BookOpen" className="mr-2" /> 
                  История наличных денег
                </CardTitle>
                <CardDescription>
                  От бартера к современным денежным системам
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px] pr-4">
                  <h3 className="text-xl font-semibold mb-3">Происхождение денег</h3>
                  <p className="mb-4">
                    До появления денег люди использовали бартерную систему, обменивая одни товары на другие. Однако бартер имел серьезные ограничения: сложно было найти человека, готового обменять именно нужный товар.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-3">Первые деньги (7-5 век до н.э.)</h3>
                  <p className="mb-4">
                    Первые монеты появились в Лидии (территория современной Турции) около 600 г. до н.э. Они были сделаны из электрума — природного сплава золота и серебра. В Китае первые монеты из бронзы в форме ножей и лопат появились примерно в то же время.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-3">Средневековье и Возрождение</h3>
                  <p className="mb-4">
                    В средние века основными валютами были золотые и серебряные монеты. В Китае уже в IX веке начали использовать бумажные деньги, но в Европе они получили распространение значительно позже.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-3">Бумажные деньги (XVII-XVIII века)</h3>
                  <p className="mb-4">
                    В Европе первые банкноты появились в XVII веке в Швеции. Банк Стокгольма начал выпускать бумажные деньги в 1661 году. В Америке колонии начали выпускать собственную бумажную валюту в начале XVIII века.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-3">Золотой стандарт (XIX-XX века)</h3>
                  <p className="mb-4">
                    В XIX веке многие страны приняли золотой стандарт, при котором валюта была привязана к золоту. Это обеспечивало стабильность денежной системы и международной торговли.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-3">Современная эра (после 1971 года)</h3>
                  <p className="mb-4">
                    В 1971 году президент США Ричард Никсон отменил золотой стандарт, что привело к системе плавающих обменных курсов, используемой сегодня. Современные наличные деньги являются фиатными — их ценность определяется государством, а не стоимостью материала, из которого они сделаны.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-3">Цифровая эра (конец XX - XXI век)</h3>
                  <p>
                    С развитием технологий появились электронные платежи, которые начали конкурировать с наличными. Тем не менее, наличные деньги продолжают играть важную роль в экономике, особенно в развивающихся странах и в условиях экономической нестабильности.
                  </p>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Вкладка с терминами и видами денег */}
          <TabsContent value="terms" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Library" className="mr-2" />
                  Термины и виды наличных денег
                </CardTitle>
                <CardDescription>
                  Ключевые понятия и классификация денежных средств
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px] pr-4">
                  <h3 className="text-xl font-semibold mb-3">Основные термины</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-200 p-4 rounded-lg">
                      <h4 className="font-semibold">Наличные деньги</h4>
                      <p>Физическая форма денег в виде банкнот и монет, которые можно использовать для непосредственной оплаты товаров и услуг.</p>
                    </div>
                    
                    <div className="bg-gray-200 p-4 rounded-lg">
                      <h4 className="font-semibold">Банкноты</h4>
                      <p>Бумажные денежные знаки, выпускаемые центральным банком государства. Имеют номинальную стоимость и являются законным платежным средством.</p>
                    </div>
                    
                    <div className="bg-gray-200 p-4 rounded-lg">
                      <h4 className="font-semibold">Монеты</h4>
                      <p>Металлические денежные знаки меньшего номинала, чем банкноты. Обычно изготавливаются из сплавов различных металлов.</p>
                    </div>
                    
                    <div className="bg-gray-200 p-4 rounded-lg">
                      <h4 className="font-semibold">Денежная масса</h4>
                      <p>Общее количество денег в обращении в экономике, включая наличные деньги и депозиты.</p>
                    </div>
                    
                    <div className="bg-gray-200 p-4 rounded-lg">
                      <h4 className="font-semibold">Эмиссия</h4>
                      <p>Выпуск денег в обращение, который осуществляется центральным банком страны.</p>
                    </div>
                    
                    <div className="bg-gray-200 p-4 rounded-lg">
                      <h4 className="font-semibold">Ликвидность</h4>
                      <p>Способность актива быстро конвертироваться в деньги без потери стоимости. Наличные деньги обладают абсолютной ликвидностью.</p>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">Виды денег</h3>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-300 p-4 rounded-lg">
                      <h4 className="font-semibold text-lg mb-2">Товарные деньги</h4>
                      <p className="mb-2">Предметы, имеющие собственную ценность, которые использовались как средство обмена.</p>
                      <p className="italic">Примеры: соль, ракушки, скот, табак, чай, драгоценные металлы.</p>
                    </div>
                    
                    <div className="bg-gray-300 p-4 rounded-lg">
                      <h4 className="font-semibold text-lg mb-2">Металлические деньги</h4>
                      <p className="mb-2">Монеты из драгоценных и недрагоценных металлов с установленным номиналом.</p>
                      <p className="italic">Примеры: золотые, серебряные, медные, биметаллические монеты.</p>
                    </div>
                    
                    <div className="bg-gray-300 p-4 rounded-lg">
                      <h4 className="font-semibold text-lg mb-2">Бумажные деньги</h4>
                      <p className="mb-2">Денежные знаки из бумаги или полимерных материалов с номиналом, установленным государством.</p>
                      <p className="italic">Примеры: банкноты различных стран (рубли, доллары, евро, юани и т.д.).</p>
                    </div>
                    
                    <div className="bg-gray-300 p-4 rounded-lg">
                      <h4 className="font-semibold text-lg mb-2">Фиатные деньги</h4>
                      <p className="mb-2">Деньги, ценность которых устанавливается и гарантируется государством, а не их физическими свойствами.</p>
                      <p className="italic">Примеры: практически все современные валюты после отмены золотого стандарта.</p>
                    </div>
                    
                    <div className="bg-gray-300 p-4 rounded-lg">
                      <h4 className="font-semibold text-lg mb-2">Коллекционные и памятные монеты</h4>
                      <p className="mb-2">Специальные выпуски монет, имеющие не только номинальную, но и коллекционную ценность.</p>
                      <p className="italic">Примеры: юбилейные монеты, монеты из драгоценных металлов, выпускаемые ограниченным тиражом.</p>
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Вкладка использования наличных денег */}
          <TabsContent value="usage" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="BarChart" className="mr-2" />
                  Использование наличных денег в мире
                </CardTitle>
                <CardDescription>
                  Статистика использования наличных в разных странах
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <p className="mb-4 text-gray-700">
                    Несмотря на распространение безналичных платежей, во многих странах наличные деньги остаются важной частью экономики. Диаграмма ниже показывает процент транзакций, совершаемых наличными деньгами, в различных странах.
                  </p>
                </div>
                
                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={cashUsageData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis 
                        dataKey="country" 
                        angle={-45} 
                        textAnchor="end" 
                        height={60}
                      />
                      <YAxis 
                        label={{ 
                          value: 'Процент транзакций', 
                          angle: -90, 
                          position: 'insideLeft' 
                        }}
                      />
                      <Tooltip 
                        formatter={(value) => [`${value}%`, 'Доля наличных платежей']}
                      />
                      <Legend />
                      <Bar 
                        dataKey="percentage" 
                        name="Доля наличных платежей" 
                        fill="#6B7280" 
                        barSize={40}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="mt-8 space-y-4">
                  <h3 className="text-xl font-semibold">Факторы, влияющие на использование наличных денег</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-200 p-4 rounded-lg">
                      <h4 className="font-semibold flex items-center">
                        <Icon name="Globe" className="mr-2" size={16} />
                        Культурные традиции
                      </h4>
                      <p>В некоторых странах (например, Япония) исторически существует культура использования наличных денег.</p>
                    </div>
                    
                    <div className="bg-gray-200 p-4 rounded-lg">
                      <h4 className="font-semibold flex items-center">
                        <Icon name="Wifi" className="mr-2" size={16} />
                        Технологическая инфраструктура
                      </h4>
                      <p>Страны с развитой цифровой инфраструктурой (Швеция) быстрее переходят на безналичные платежи.</p>
                    </div>
                    
                    <div className="bg-gray-200 p-4 rounded-lg">
                      <h4 className="font-semibold flex items-center">
                        <Icon name="LockKeyhole" className="mr-2" size={16} />
                        Доверие к финансовой системе
                      </h4>
                      <p>В странах с нестабильной банковской системой люди предпочитают держать деньги в наличной форме.</p>
                    </div>
                    
                    <div className="bg-gray-200 p-4 rounded-lg">
                      <h4 className="font-semibold flex items-center">
                        <Icon name="User" className="mr-2" size={16} />
                        Демографические факторы
                      </h4>
                      <p>Пожилые люди часто предпочитают наличные, в то время как молодежь активнее использует цифровые платежи.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Вкладка сравнения наличных и безналичных денег */}
          <TabsContent value="comparison" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Scale" className="mr-2" />
                  Сравнение наличных и безналичных платежей
                </CardTitle>
                <CardDescription>
                  Плюсы и минусы различных способов оплаты
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Icon name="Banknote" className="mr-2" />
                      Наличные деньги
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2">Преимущества</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>Анонимность и конфиденциальность платежей</li>
                          <li>Работают без электричества и интернета</li>
                          <li>Не требуют дополнительных устройств для использования</li>
                          <li>Помогают контролировать расходы (физически ощутимы)</li>
                          <li>Принимаются повсеместно, нет ограничений по возрасту</li>
                          <li>Не подвержены кибератакам и техническим сбоям</li>
                          <li>Не требуют раскрытия личной информации</li>
                        </ul>
                      </div>
                      
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-800 mb-2">Недостатки</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>Риск кражи и физической потери</li>
                          <li>Неудобство при крупных платежах (объем, вес)</li>
                          <li>Затраты на хранение, транспортировку и обработку</li>
                          <li>Изнашиваются и могут быть повреждены</li>
                          <li>Сложнее отслеживать расходы без учета</li>
                          <li>Необходимость иметь при себе сдачу</li>
                          <li>Могут способствовать развитию теневой экономики</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Icon name="CreditCard" className="mr-2" />
                      Безналичные платежи
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2">Преимущества</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>Удобство и скорость транзакций</li>
                          <li>Автоматический учет расходов и доходов</li>
                          <li>Повышенная безопасность (защита PIN-кодом, 2FA)</li>
                          <li>Возможность отмены или оспаривания платежей</li>
                          <li>Доступ к онлайн-покупкам и международным платежам</li>
                          <li>Кэшбэк и бонусные программы</li>
                          <li>Отсутствие необходимости иметь при себе сдачу</li>
                        </ul>
                      </div>
                      
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-800 mb-2">Недостатки</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>Зависимость от технической инфраструктуры</li>
                          <li>Риски киберпреступности и хакерских атак</li>
                          <li>Отсутствие анонимности, отслеживание транзакций</li>
                          <li>Возможные комиссии за обслуживание и операции</li>
                          <li>Психологическая легкость траты средств</li>
                          <li>Не всегда доступны в отдаленных районах</li>
                          <li>Требуют наличия банковского счета и документов</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-5 bg-gray-200 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Вывод</h3>
                  <p className="text-gray-700">
                    И наличные, и безналичные платежи имеют свои преимущества и недостатки. Оптимальным решением для большинства людей является комбинированный подход — использование безналичных платежей для повседневных покупок и крупных трат, при сохранении некоторого количества наличных денег для определенных ситуаций или как часть финансовой безопасности.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-center mt-8">
          <Button
            variant="outline"
            onClick={() => {
              const nextTab = {
                history: 'terms',
                terms: 'usage',
                usage: 'comparison',
                comparison: 'history'
              }[activeTab] as string;
              
              setActiveTab(nextTab);
            }}
            className="flex items-center"
          >
            <Icon name="ArrowRight" className="mr-2" />
            Следующий раздел
          </Button>
        </div>
      </main>

      {/* Подвал страницы */}
      <footer className="bg-gray-700 text-white py-8 px-4 mt-8">
        <div className="container mx-auto max-w-6xl">
          <p className="text-center text-gray-300">
            © 2025 Наличные деньги в современной жизни. Информационный проект.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
