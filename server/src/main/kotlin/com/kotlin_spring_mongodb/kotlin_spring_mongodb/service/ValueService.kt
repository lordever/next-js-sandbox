package com.kotlin_spring_mongodb.kotlin_spring_mongodb.service

import com.kotlin_spring_mongodb.kotlin_spring_mongodb.model.Value
import com.kotlin_spring_mongodb.kotlin_spring_mongodb.repository.ValueRepository
import org.springframework.stereotype.Service
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

@Service
class ValueService(private val valueRepository: ValueRepository) {
    
    fun getAllValues(): Flux<Value> = valueRepository.findAll()
    
    fun getValueById(id: String): Mono<Value> = valueRepository.findById(id)
    
    fun createValue(value: Value): Mono<Value> = valueRepository.save(value)
    
    fun updateValue(id: String, value: Value): Mono<Value> = 
        valueRepository.findById(id)
            .flatMap { valueRepository.save(value.copy(id = id)) }
    
    fun deleteValue(id: String): Mono<Void> = valueRepository.deleteById(id)
}
