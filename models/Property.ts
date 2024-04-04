import {Schema, model, models, Types} from 'mongoose';
import {PropertyDTO} from "@/models/dtos/PropertyDTO";
import {Location} from "@/models/dtos/LocationDTO";
import {Rates} from "@/models/dtos/RatesDTO";
import {SellerInfo} from "@/models/dtos/SellerInfoDTO";

const PropertySchema = new Schema<PropertyDTO>({
    owner: {type: String, required:true},
    name: {type:String, required:true},
    type: {type:String, required:true},
    description: {type:String, required:true},
    location: new Schema<Location>({
        street:{type:String},
        city:{type:String},
        state:{type:String},
        zipcode:{type:String}
    }),
    beds: {type:Number, required:true},
    baths: {type:Number, required:true},
    square_feet: {type:Number, required:true},
    amenities: [{type:String}],
    rates: new Schema<Rates>({
        weekly:{type:Number, required:true},
        monthly:{type:Number, required:false},
        nightly:{type:Number, required:false}
    }),
    seller_info: new Schema<SellerInfo>({
       name:{type:String, required:true},
       email:{type:String, required:true},
       phone:{type:String, required:true}
    }),
    images: [{type:String}],
    is_featured: {type:Boolean, default:false}
}, {timestamps:true});

const Property = models.Property || model('properties', PropertySchema);
export default Property;