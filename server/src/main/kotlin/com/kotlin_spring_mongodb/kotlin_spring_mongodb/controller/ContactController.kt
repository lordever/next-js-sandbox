package com.kotlin_spring_mongodb.kotlin_spring_mongodb.controller

import com.kotlin_spring_mongodb.kotlin_spring_mongodb.model.Contact
import com.kotlin_spring_mongodb.kotlin_spring_mongodb.service.ContactService
import mu.KotlinLogging
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

@RestController
@RequestMapping("/api/contacts")
@CrossOrigin(origins = ["http://localhost:3000"])
class ContactController(private val contactService: ContactService) {
    
    private val logger = KotlinLogging.logger {}
    
    @GetMapping
    fun getAllContacts(): Flux<Contact> {
        logger.info { "GET /api/contacts" }
        return contactService.getAllContacts()
    }
    
    @GetMapping("/{id}")
    fun getContactById(@PathVariable id: String): Mono<ResponseEntity<Contact>> {
        logger.info { "GET /api/contacts/$id" }
        return contactService.getContactById(id)
            .map { ResponseEntity.ok(it) }
            .defaultIfEmpty(ResponseEntity.notFound().build())
    }
    
    @PostMapping
    fun createContact(@RequestBody contact: Contact): Mono<ResponseEntity<Contact>> {
        logger.info { "POST /api/contacts" }
        return contactService.createContact(contact)
            .map { ResponseEntity.status(HttpStatus.CREATED).body(it) }
    }
    
    @PutMapping("/{id}")
    fun updateContact(@PathVariable id: String, @RequestBody contact: Contact): Mono<ResponseEntity<Contact>> {
        logger.info { "PUT /api/contacts/$id" }
        return contactService.updateContact(id, contact)
            .map { ResponseEntity.ok(it) }
            .defaultIfEmpty(ResponseEntity.notFound().build())
    }
    
    @DeleteMapping("/{id}")
    fun deleteContact(@PathVariable id: String): Mono<ResponseEntity<Void>> {
        logger.info { "DELETE /api/contacts/$id" }
        return contactService.deleteContact(id)
            .then(Mono.just(ResponseEntity.noContent().build<Void>()))
    }
}
