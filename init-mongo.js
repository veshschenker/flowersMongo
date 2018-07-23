conn = new Mongo();
db = conn.getDB('flowersDatabase');
db.flowersApp.insertMany([
   {name: "rose", color: "red",native: "europe"}, 
   {name: "Lily", color: "White",native: "asia"}, 
   {name: "Lavender", color: "Pink",native: "america"}, 
   {name: "Tulips", color: "yellow",native: "europe"}, 
])