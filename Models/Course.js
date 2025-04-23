const mongoose=require('mongoose');
const { default: slugify } = require('slugify');

const CourseSchema = new mongoose.Schema({
    title:String,
    duration:String,
    description:String,
    category:String,
    discountPercentage:String,
    OfferTillDate:String,
    startDate:String,
    endDate:String,
    isFeatured:Boolean,
    banner:String,
    createdBy:String,
},{timestamps:true});

CourseSchema.pre('save',function(next){
if(!this.slug){
    this.slug=slugify(this.title);
}
next();
})

const Course = mongoose.model('course',CourseSchema);

module.exports = Course;