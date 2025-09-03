package com.kotlin_spring_mongodb.kotlin_spring_mongodb.service

import com.kotlin_spring_mongodb.kotlin_spring_mongodb.model.Faq
import com.kotlin_spring_mongodb.kotlin_spring_mongodb.repository.FaqRepository
import org.springframework.stereotype.Service
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

@Service
class FaqService(private val faqRepository: FaqRepository) {
    
    fun getAllFaqs(): Flux<Faq> = faqRepository.findAll()
    
    fun getFaqById(id: String): Mono<Faq> = faqRepository.findById(id)
    
    fun getFaqByCategory(category: String): Mono<Faq> = 
        faqRepository.findAll()
            .filter { it.category == category }
            .next()
    
    fun createFaq(faq: Faq): Mono<Faq> = faqRepository.save(faq)
    
    fun updateFaq(id: String, faq: Faq): Mono<Faq> = 
        faqRepository.findById(id)
            .flatMap { faqRepository.save(faq.copy(id = id)) }
    
    fun deleteFaq(id: String): Mono<Void> = faqRepository.deleteById(id)
    
    fun deleteAll(): Mono<Void> = faqRepository.deleteAll()
}
