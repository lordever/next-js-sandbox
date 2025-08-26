package com.kotlin_spring_mongodb.kotlin_spring_mongodb.service

import com.kotlin_spring_mongodb.kotlin_spring_mongodb.model.Highlight
import com.kotlin_spring_mongodb.kotlin_spring_mongodb.repository.HighlightRepository
import org.springframework.stereotype.Service
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

@Service
class HighlightService(private val highlightRepository: HighlightRepository) {
    
    fun getAllHighlights(): Flux<Highlight> = highlightRepository.findAll()
    
    fun getHighlightById(id: String): Mono<Highlight> = highlightRepository.findById(id)
    
    fun createHighlight(highlight: Highlight): Mono<Highlight> = highlightRepository.save(highlight)
    
    fun updateHighlight(id: String, highlight: Highlight): Mono<Highlight> = 
        highlightRepository.findById(id)
            .flatMap { highlightRepository.save(highlight.copy(id = id)) }
    
    fun deleteHighlight(id: String): Mono<Void> = highlightRepository.deleteById(id)
}
