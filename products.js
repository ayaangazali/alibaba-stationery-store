// all the products go here
var products = [
  {id:1, name:"Pastel Gel Pen Set (12 pcs)", price:8.99, category:"Pens", image:"images/gelpen.jpg"},
  {id:2, name:"Cute Cat Washi Tape", price:3.50, category:"Washi Tape", image:"images/washi_cat.jpg"},
  {id:3, name:"Floral Washi Tape 10 Roll Pack", price:6.99, category:"Washi Tape", image:"images/washi_floral.jpg"},
  {id:4, name:"Kraft Dotted Notebook A5", price:12.00, category:"Notebooks", image:"images/notebook_kraft.jpg"},
  {id:5, name:"Grid Hardcover Journal", price:14.50, category:"Notebooks", image:"images/journal_grid.jpg"},
  {id:6, name:"Mini Sticky Notes 8 Pack", price:4.25, category:"Sticky Notes", image:"images/sticky_mini.jpg"}
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
