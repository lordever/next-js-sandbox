# Scoot App Backend

Серверная часть приложения Scoot, построенная на Spring Boot с Kotlin и MongoDB.

## Технологии

- **Spring Boot 3.3.1** - основной фреймворк
- **Kotlin 1.9.24** - язык программирования
- **Spring Data MongoDB Reactive** - реактивная работа с MongoDB
- **Spring WebFlux** - реактивный веб-фреймворк
- **MongoDB** - база данных
- **Maven** - система сборки

## Структура проекта

```
src/main/kotlin/com/kotlin_spring_mongodb/kotlin_spring_mongodb/
├── config/                 # Конфигурации
│   ├── MongoConfig.kt     # Конфигурация MongoDB
│   └── WebConfig.kt       # Конфигурация CORS
├── controller/            # REST контроллеры
│   ├── ContactController.kt
│   ├── FaqController.kt
│   ├── FeatureController.kt
│   ├── HighlightController.kt
│   └── ValueController.kt
├── exception/             # Обработка исключений
│   └── GlobalExceptionHandler.kt
├── model/                 # Модели данных
│   ├── Contact.kt
│   ├── Faq.kt
│   ├── FaqItem.kt
│   ├── Feature.kt
│   ├── Highlight.kt
│   ├── HighlightItem.kt
│   └── Value.kt
├── repository/            # Репозитории
│   ├── ContactRepository.kt
│   ├── FaqRepository.kt
│   ├── FeatureRepository.kt
│   ├── HighlightRepository.kt
│   └── ValueRepository.kt
├── service/               # Сервисы
│   ├── ContactService.kt
│   ├── DataInitializationService.kt
│   ├── FaqService.kt
│   ├── FeatureService.kt
│   ├── HighlightService.kt
│   └── ValueService.kt
└── KotlinSpringMongoDBApplication.kt
```

## API Endpoints

### Контакты
- `GET /api/contacts` - получить все контакты
- `GET /api/contacts/{id}` - получить контакт по ID
- `POST /api/contacts` - создать новый контакт
- `PUT /api/contacts/{id}` - обновить контакт
- `DELETE /api/contacts/{id}` - удалить контакт

### FAQ
- `GET /api/faqs` - получить все FAQ
- `GET /api/faqs/{id}` - получить FAQ по ID
- `GET /api/faqs/category/{category}` - получить FAQ по категории
- `POST /api/faqs` - создать новый FAQ
- `PUT /api/faqs/{id}` - обновить FAQ
- `DELETE /api/faqs/{id}` - удалить FAQ

### Функции
- `GET /api/features` - получить все функции
- `GET /api/features/{id}` - получить функцию по ID
- `POST /api/features` - создать новую функцию
- `PUT /api/features/{id}` - обновить функцию
- `DELETE /api/features/{id}` - удалить функцию

### Highlights
- `GET /api/highlights` - получить все highlights
- `GET /api/highlights/{id}` - получить highlight по ID
- `POST /api/highlights` - создать новый highlight
- `PUT /api/highlights/{id}` - обновить highlight
- `DELETE /api/highlights/{id}` - удалить highlight

### Ценности
- `GET /api/values` - получить все ценности
- `GET /api/values/{id}` - получить ценность по ID
- `POST /api/values` - создать новую ценность
- `PUT /api/values/{id}` - обновить ценность
- `DELETE /api/values/{id}` - удалить ценность

## Установка и запуск

### Предварительные требования

1. **Java 21** - убедитесь, что у вас установлена Java 21
2. **MongoDB** - установите и запустите MongoDB локально или используйте MongoDB Atlas

### Настройка MongoDB

1. Установите MongoDB локально или создайте кластер в MongoDB Atlas
2. Обновите настройки подключения в `application.properties`:

```properties
spring.data.mongodb.uri=mongodb://localhost:27017/scoot-app
spring.data.mongodb.database=scoot-app
```

### Запуск приложения

1. Клонируйте репозиторий
2. Перейдите в папку `server`
3. Запустите приложение:

```bash
# Сборка проекта
mvn clean install

# Запуск приложения
mvn spring-boot:run
```

Или используйте IDE для запуска `KotlinSpringMongoDBApplication.kt`

### Проверка работы

После запуска приложение будет доступно по адресу: `http://localhost:8080`

Для проверки API используйте:
- `http://localhost:8080/api/contacts` - получить все контакты
- `http://localhost:8080/api/faqs` - получить все FAQ
- `http://localhost:8080/api/features` - получить все функции

## Инициализация данных

При первом запуске приложения автоматически создаются тестовые данные в базе данных через `DataInitializationService`.

## Логирование

Логирование настроено с использованием Kotlin Logging. Уровни логирования можно настроить в `application.properties`:

```properties
logging.level.com.kotlin_spring_mongodb=DEBUG
logging.level.org.springframework.data.mongodb.core.ReactiveMongoTemplate=DEBUG
```

## CORS

Настроен CORS для работы с фронтендом на `http://localhost:3000` и `http://localhost:3001`.

## Обработка ошибок

Реализован глобальный обработчик исключений `GlobalExceptionHandler`, который возвращает структурированные ответы об ошибках.

## Разработка

### Добавление новой сущности

1. Создайте модель в пакете `model`
2. Создайте репозиторий в пакете `repository`
3. Создайте сервис в пакете `service`
4. Создайте контроллер в пакете `controller`
5. Добавьте инициализацию данных в `DataInitializationService` (если необходимо)

### Тестирование

Для тестирования API можно использовать:
- Postman
- curl
- Swagger UI (если добавлен)
- Браузер (для GET запросов)
