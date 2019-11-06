// all the products go here
var products = [
  {id:1, name:"Pastel Gel Pen Set (12 pcs)", price:8.99, category:"Pens", image:"images/gelpen.jpg"},
  {id:2, name:"Cute Cat Washi Tape", price:3.50, category:"Washi Tape", image:"images/washi_cat.jpg"},
  {id:3, name:"Floral Washi Tape 10 Roll Pack", price:6.99, category:"Washi Tape", image:"images/washi_floral.jpg"},
  {id:4, name:"Kraft Dotted Notebook A5", price:12.00, category:"Notebooks", image:"images/notebook_kraft.jpg"},
  {id:5, name:"Grid Hardcover Journal", price:14.50, category:"Notebooks", image:"images/journal_grid.jpg"},
  {id:6, name:"Mini Sticky Notes 8 Pack", price:4.25, category:"Sticky Notes", image:"images/sticky_mini.jpg"},
  {id:7, name:"Heart Shape Sticky Notes", price:2.99, category:"Sticky Notes", image:"images/sticky_heart.jpg"},
  {id:8, name:"0.5mm Mechanical Pencil x3", price:7.49, category:"Pencils", image:"images/mech_pencil.jpg"},
  {id:9, name:"Pastel Highlighter Set (6)", price:5.99, category:"Highlighters", image:"images/highlighter.jpg"},
  {id:10, name:"Black Fineliner Pens 0.38mm", price:9.99, category:"Pens", image:"images/fineliner.jpg"},
  {id:11, name:"Star Washi Tape Gold Foil", price:4.50, category:"Washi Tape", image:"images/washi_star.jpg"},
  {id:12, name:"Spiral Notebook 80 Sheets", price:5.50, category:"Notebooks", image:"images/notebook_spiral.jpg"},
  {id:13, name:"Transparent Sticky Note Tabs", price:3.99, category:"Sticky Notes", image:"images/sticky_tabs.jpg"},
  {id:14, name:"Color Mechanical Pencil 0.7", price:6.25, category:"Pencils", image:"images/mech_color.jpg"},
  {id:15, name:"Mild Liner Double Ended (10)", price:11.99, category:"Highlighters", image:"images/mildliner.jpg"},
  {id:16, name:"Retro Fountain Pen", price:15.99, category:"Pens", image:"images/fountain.jpg"}
];

// helper to find one product by its id
function getProduct(id){
  for(var i=0;i<products.length;i++){
    if(products[i].id == id){
      return products[i];
    }
  }
  return null;
}
