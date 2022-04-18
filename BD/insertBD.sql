
INSERT INTO `catestatus`(`id`, `Nombre`, `Descripcion`) VALUES (1, 'Activo', NULL);
INSERT INTO `catestatus`(`id`, `Nombre`, `Descripcion`) VALUES (2, 'Descativo', NULL);
INSERT INTO `catestatus`(`id`, `Nombre`, `Descripcion`) VALUES (3, 'Baja', NULL);
INSERT INTO `catestatus`(`id`, `Nombre`, `Descripcion`) VALUES (4, 'No verificado', NULL);



INSERT INTO `catroles`(`id`, `Nombre`, `Descripcion`) VALUES (1, 'Visitante', 'Sin indicio de violencia');
INSERT INTO `catroles`(`id`, `Nombre`, `Descripcion`) VALUES (2, 'Victima', 'sufre de violencia de algun tipo');
INSERT INTO `catroles`(`id`, `Nombre`, `Descripcion`) VALUES (3, 'Voluntaria', 'ayuda a una vitima');
INSERT INTO `catroles`(`id`, `Nombre`, `Descripcion`) VALUES (4, 'Coordinadora', 'dirije a las volunatias');


INSERT INTO `catsemaforo`(`id`, `Nombre`, `Descripcion`) VALUES (NULL, 'No riesgo', 'Persona que no  sufre violencia');
INSERT INTO `catsemaforo`(`id`, `Nombre`, `Descripcion`) VALUES (NULL, 'En riesgo', 'Perona con violencia');



INSERT INTO `CatEstados` (`id`, `estado`) VALUES
(1, 'Aguascalientes'),
(2, 'Baja California'),
(3, 'Baja California Sur'),
(4, 'Campeche'),
(5, 'Coahuila de Zaragoza'),
(6, 'Colima'),
(7, 'Chiapas'),
(8, 'Chihuahua'),
(9, 'Distrito Federal'),
(10, 'Durango'),
(11, 'Guanajuato'),
(12, 'Guerrero'),
(13, 'Hidalgo'),
(14, 'Jalisco'),
(15, 'México'),
(16, 'Michoacán de Ocampo'),
(17, 'Morelos'),
(18, 'Nayarit'),
(19, 'Nuevo León'),
(20, 'Oaxaca de Juárez'),
(21, 'Puebla'),
(22, 'Querétaro'),
(23, 'Quintana Roo'),
(24, 'San Luis Potosí'),
(25, 'Sinaloa'),
(26, 'Sonora'),
(27, 'Tabasco'),
(28, 'Tamaulipas'),
(29, 'Tlaxcala'),
(30, 'Veracruz de Ignacio de la Llave'),
(31, 'Yucatán'),
(32, 'Zacatecas'),
(33, 'Extranjero'),
(34, 'No Especificado');





INSERT INTO `usuaria`(`id`, `Rol`, `Nombre`, `ApellidoPaterno`, `ApellidoMaterno`, `NickName`, `Pass`,  `FechaNacimiento`, `EntidadFederativa`, `Ciudad`, `Estatus`) VALUES (7, 1, 'Perenganita3', 'Perenganita', 'Perenganita', 'Perenganita3', 'Perenganita3', '1999-04-07', 9, NULL, 1);
INSERT INTO `usuaria`(`id`, `Rol`, `Nombre`, `ApellidoPaterno`, `ApellidoMaterno`, `NickName`, `Pass`,  `FechaNacimiento`, `EntidadFederativa`, `Ciudad`, `Estatus`) VALUES (1, 1, 'Menganita edt', 'Menganita', 'Menganita', 'Menganita', 'Menganita', '2022-03-01', 10, 'Menganita', 1);
INSERT INTO `usuaria`(`id`, `Rol`, `Nombre`, `ApellidoPaterno`, `ApellidoMaterno`, `NickName`, `Pass`,  `FechaNacimiento`, `EntidadFederativa`, `Ciudad`, `Estatus`) VALUES (15, 1, 'Edit Perenganita6', 'Perenganita', 'Perenganita', 'Perenganita6', 'Perenganita6', '2020-04-21', 9, NULL, 1);
INSERT INTO `usuaria`(`id`, `Rol`, `Nombre`, `ApellidoPaterno`, `ApellidoMaterno`, `NickName`, `Pass`,  `FechaNacimiento`, `EntidadFederativa`, `Ciudad`, `Estatus`) VALUES (16, 1, 'Edi3 Perenganita7', 'Perenganita', NULL, 'Perenganita7', 'Perenganita7', NULL, 9, NULL, 1);
INSERT INTO `usuaria`(`id`, `Rol`, `Nombre`, `ApellidoPaterno`, `ApellidoMaterno`, `NickName`, `Pass`,  `FechaNacimiento`, `EntidadFederativa`, `Ciudad`, `Estatus`) VALUES (17, 1, 'Edi4 Perenganita8', 'Perenganita', NULL, 'Perenganita8', 'Perenganita8', NULL, 9, NULL, 1);
INSERT INTO `usuaria`(`id`, `Rol`, `Nombre`, `ApellidoPaterno`, `ApellidoMaterno`, `NickName`, `Pass`,  `FechaNacimiento`, `EntidadFederativa`, `Ciudad`, `Estatus`) VALUES (18, 1, 'Menganita2', 'Menganita', 'Menganita', 'Menganita2', 'Menganita2', '2020-03-01', 9, 'Menganita2', 1);
INSERT INTO `usuaria`(`id`, `Rol`, `Nombre`, `ApellidoPaterno`, `ApellidoMaterno`, `NickName`, `Pass`,  `FechaNacimiento`, `EntidadFederativa`, `Ciudad`, `Estatus`) VALUES (19, 2, 'Menganita3', 'Menganita', 'Menganita', 'Menganita3', 'Menganita3', '2020-03-01', 9, 'Menganita3', 1);
INSERT INTO `usuaria`(`id`, `Rol`, `Nombre`, `ApellidoPaterno`, `ApellidoMaterno`, `NickName`, `Pass`,  `FechaNacimiento`, `EntidadFederativa`, `Ciudad`, `Estatus`) VALUES (20, 2, 'Edi4 Menganita4', 'Menganita', 'Menganita', 'Menganita4', 'Menganita4', '2020-03-01', 15, 'Menganita4', 1);
INSERT INTO `usuaria`(`id`, `Rol`, `Nombre`, `ApellidoPaterno`, `ApellidoMaterno`, `NickName`, `Pass`,  `FechaNacimiento`, `EntidadFederativa`, `Ciudad`, `Estatus`) VALUES (42, 1, 'susi edit', 'susi', NULL, 'susi', 'susi',  NULL, 9, NULL, 1);
INSERT INTO `usuaria`(`id`, `Rol`, `Nombre`, `ApellidoPaterno`, `ApellidoMaterno`, `NickName`, `Pass`,  `FechaNacimiento`, `EntidadFederativa`, `Ciudad`, `Estatus`) VALUES (46, 1, 'Susi4', 'Susi', 'Susi', 'Susi4 edit', 'Susi4', '2020-04-04', 9, 'Susi4', 1);





INSERT INTO `ticket`(`id`, `Usuaria`, `Semaforo_id`, `Descripcion`) VALUES (1, 1, 1, 'La usuaria esta en peligro edit');
INSERT INTO `ticket`(`id`, `Usuaria`, `Semaforo_id`, `Descripcion` ) VALUES (5, 1, 1, 'Mi esposo me ha golpeado ');
INSERT INTO `ticket`(`id`, `Usuaria`, `Semaforo_id`, `Descripcion` ) VALUES (6, 1, 2, 'edit3 Mi esposo me golpea');
INSERT INTO `ticket`(`id`, `Usuaria`, `Semaforo_id`, `Descripcion` ) VALUES (17, 1, 1, 'Tengo problemas de violencia con mi esposo edit');





INSERT INTO `asignacioncaso`( `Voluntaria`, `Ticket`) VALUES (1, 1);
INSERT INTO `asignacioncaso`( `Voluntaria`, `Ticket`) VALUES (15, 1);
INSERT INTO `asignacioncaso`( `Voluntaria`, `Ticket`) VALUES (16, 1);
INSERT INTO `asignacioncaso`( `Voluntaria`, `Ticket`) VALUES (17, 1);
INSERT INTO `asignacioncaso`( `Voluntaria`, `Ticket`) VALUES (1, 1);
INSERT INTO `asignacioncaso`( `Voluntaria`, `Ticket`) VALUES (1, 1);
INSERT INTO `asignacioncaso`( `Voluntaria`, `Ticket`) VALUES (1, 1);
INSERT INTO `asignacioncaso`( `Voluntaria`, `Ticket`) VALUES (1, 1);
INSERT INTO `asignacioncaso`( `Voluntaria`, `Ticket`) VALUES (42, 6);









