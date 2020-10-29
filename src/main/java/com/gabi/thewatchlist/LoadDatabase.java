package com.gabi.thewatchlist;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class LoadDatabase {
    private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

    @Bean
    CommandLineRunner initDatabase(ShowRepository showRepository) {
        return args -> {
            log.info("Preloading " + showRepository.save(new Show(383538, Status.IN_PROGRESS)));
            log.info("Preloading " + showRepository.save(new Show(297708, Status.COMPLETED)));
        };
    }
}
