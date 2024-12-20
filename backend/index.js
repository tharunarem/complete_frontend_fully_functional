const port =4000;
const express=require('express');
const app =express();
const mongoose= require('mongoose');
const jwt = require('jsonwebtoken');
const multer =require('multer');
const path =require('path')
const cors =require('cors');


app.use(express.json());
app.use(cors());

//connect DataBase

mongoose.connect("mongodb+srv://aremtharun:1230123012@cluster0.ia0dfue.mongodb.net/ecommerce");

//Api creation

app.get('/',(req,res)=>{
    res.send("Express App is Running")
})

const storage=multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }

})

const upload =multer({storage:storage})

//creating end point for images

app.use('/images',express.static('upload/images'))

app.post('/upload',upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })

})

//Createing products schema
const Product=mongoose.model('product',{
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String ,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    avilable:{
        type:Boolean,
        default:true,
    },
})
app.post('/addproduct',async(req,res)=>{
    let products=await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array =products.slice(-1);
        let last_product =last_product_array[0];
        id=last_product.id+1;
    }
    else{
        id=1;
    }
    const product =new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log('Saved')
    res.json({
        success:true,
        name:req.body.name,
    })

})

//creating api to delete products
app.post('/removeproduct',async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id})
    console.log('removed')
    res.json({
        sucess:true,
        name:req.body.name,
    })
})

//creating API to get all products
app.get('/all_products',async(req,res)=>{
    let products= await Product.find({})
    console.log('all products fetched')
    res.send(products);
})



app.listen(port,(error)=>{
    if(!error){
        console.log('server running on port:'+port);
    }
    else{
        console.log('error:'+error);
    }
})