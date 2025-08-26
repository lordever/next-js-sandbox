package com.kotlin_spring_mongodb.kotlin_spring_mongodb.config

import org.springframework.context.annotation.Configuration
import org.springframework.data.mongodb.repository.config.EnableReactiveMongoRepositories

@Configuration
@EnableReactiveMongoRepositories(basePackages = ["com.kotlin_spring_mongodb.kotlin_spring_mongodb.repository"])
class MongoConfig
