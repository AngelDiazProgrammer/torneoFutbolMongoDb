for (let i = 0; i < 10000; i++) {
  db.partidos.insert({
    fecha: new Date('2024-12-' + (i % 31 + 1) + 'T00:00:00Z'),
    hora: "18:00",
    lugar: "Estadio " + (i % 5 + 1),
    equipo_local: ObjectId("equipoID1"),
    equipo_visitante: ObjectId("equipoID2"),
    arbitros: [ObjectId("arbitroID1"), ObjectId("arbitroID2")],
    resultado: { goles_local: 3, goles_visitante: 2 }
  });
}

// realizar una consulta
db.partidos.find({ fecha: { $gt: new Date('2024-12-01') } }).limit(1);

