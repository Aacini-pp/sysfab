-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema fab2
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema fab2
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `fab2` DEFAULT CHARACTER SET utf8 ;
USE `fab2` ;

-- -----------------------------------------------------
-- Table `fab2`.`CatRoles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fab2`.`CatRoles` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(20) NOT NULL,
  `Descripcion` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `idtable1_UNIQUE` (`id` ASC)    ,
  UNIQUE INDEX `Nombre_UNIQUE` (`Nombre` ASC)    )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fab2`.`CatEstatus`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fab2`.`CatEstatus` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(20) NOT NULL,
  `Descripcion` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `idtable1_UNIQUE` (`id` ASC)    ,
  UNIQUE INDEX `Nombre_UNIQUE` (`Nombre` ASC)    )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fab2`.`CatEstados`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fab2`.`CatEstados` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `Estado` VARCHAR(25) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `idtable1_UNIQUE` (`id` ASC)    ,
  UNIQUE INDEX `Nombre_UNIQUE` (`Estado` ASC)    )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fab2`.`Usuaria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fab2`.`Usuaria` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `Rol` INT UNSIGNED NOT NULL DEFAULT 1,
  `Nombre` VARCHAR(45) NOT NULL,
  `ApellidoPaterno` VARCHAR(20) NULL,
  `ApellidoMaterno` VARCHAR(20) NULL,
  `NickName` VARCHAR(45) NOT NULL,
  `Pass` VARCHAR(45) NOT NULL,
  `FechaNacimiento` DATE NULL,
  `EntidadFederativa` INT UNSIGNED NOT NULL DEFAULT 9,
  `Ciudad` VARCHAR(45) NULL,
  `Estatus` INT UNSIGNED NOT NULL DEFAULT 1,
  `PerfilFB` VARCHAR(45) NULL,
  `Email` VARCHAR(45) NULL,
  `Telefono` VARCHAR(15) NULL,
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC)  ,
  INDEX `fk_Usuaria_CatRoles1_idx` (`Rol` ASC)  ,
  UNIQUE INDEX `Nick_UNIQUE` (`NickName` ASC)  ,
  INDEX `fk_Usuaria_CatEstatus1_idx` (`Estatus` ASC)  ,
  INDEX `fk_Usuaria_CatEstados1_idx` (`EntidadFederativa` ASC)  ,
  UNIQUE INDEX `Perfil_UNIQUE` (`PerfilFB` ASC)  ,
  UNIQUE INDEX `Telefono_UNIQUE` (`Telefono` ASC)  ,
  UNIQUE INDEX `Email_UNIQUE` (`Email` ASC)  ,
  CONSTRAINT `fk_Usuaria_CatRoles1`
    FOREIGN KEY (`Rol`)
    REFERENCES `fab2`.`CatRoles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuaria_CatEstatus1`
    FOREIGN KEY (`Estatus`)
    REFERENCES `fab2`.`CatEstatus` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuaria_CatEstados1`
    FOREIGN KEY (`EntidadFederativa`)
    REFERENCES `fab2`.`CatEstados` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `fab2`.`CatSemaforo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fab2`.`CatSemaforo` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(45) NOT NULL,
  `Descripcion` TEXT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC)    ,
  UNIQUE INDEX `Nombre_UNIQUE` (`Nombre` ASC)    )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fab2`.`Ticket`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fab2`.`Ticket` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `Usuaria` INT UNSIGNED NOT NULL,
  `Semaforo_id` INT UNSIGNED NOT NULL DEFAULT 0,
  `Descripcion` TEXT NULL,
  `Estatus` INT UNSIGNED NOT NULL DEFAULT 1,
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `idTickets_UNIQUE` (`id` ASC)    ,
  INDEX `fk_Tickets_CatSemaforo1_idx` (`Semaforo_id` ASC)    ,
  INDEX `fk_Tickets_Usuaria1_idx` (`Usuaria` ASC)    ,
  INDEX `fk_Ticket_CatEstatus1_idx` (`Estatus` ASC)    ,
  CONSTRAINT `fk_Tickets_CatSemaforo1`
    FOREIGN KEY (`Semaforo_id`)
    REFERENCES `fab2`.`CatSemaforo` (`id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Tickets_Usuaria1`
    FOREIGN KEY (`Usuaria`)
    REFERENCES `fab2`.`Usuaria` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Ticket_CatEstatus1`
    FOREIGN KEY (`Estatus`)
    REFERENCES `fab2`.`CatEstatus` (`id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fab2`.`AsignacionCaso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fab2`.`AsignacionCaso` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `Ticket` INT UNSIGNED NOT NULL,
  `Voluntaria` INT UNSIGNED NOT NULL,
  `Estatus` INT UNSIGNED NOT NULL DEFAULT 1,
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `idAsignacion de caso_UNIQUE` (`id` ASC)    ,
  INDEX `fk_AsignacionCaso_Tickets1_idx` (`Ticket` ASC)    ,
  INDEX `fk_AsignacionCaso_Usuaria1_idx` (`Voluntaria` ASC)    ,
  INDEX `fk_AsignacionCaso_CatEstatus1_idx` (`Estatus` ASC)    ,
  CONSTRAINT `fk_AsignacionCaso_Tickets1`
    FOREIGN KEY (`Ticket`)
    REFERENCES `fab2`.`Ticket` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_AsignacionCaso_Usuaria1`
    FOREIGN KEY (`Voluntaria`)
    REFERENCES `fab2`.`Usuaria` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_AsignacionCaso_CatEstatus1`
    FOREIGN KEY (`Estatus`)
    REFERENCES `fab2`.`CatEstatus` (`id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fab2`.`Session`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fab2`.`Session` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `Usuaria` INT UNSIGNED NOT NULL,
  `Inicio` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Fin` DATETIME NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC)    ,
  INDEX `fk_Session_Usuaria1_idx` (`Usuaria` ASC)    ,
  CONSTRAINT `fk_Session_Usuaria1`
    FOREIGN KEY (`Usuaria`)
    REFERENCES `fab2`.`Usuaria` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
