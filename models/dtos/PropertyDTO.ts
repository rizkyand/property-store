import {Location} from "@/models/dtos/LocationDTO";
import {Rates} from "@/models/dtos/RatesDTO";
import {SellerInfo} from "@/models/dtos/SellerInfoDTO";
import {User} from "@/models/dtos/UserDTO";

export interface PropertyDTO {
    _id: string
    owner: string
    username?:string
    name: string
    type: string
    description: string
    location: Location
    beds: number
    baths: number
    square_feet: number
    amenities: string[]
    rates: Rates
    seller_info: SellerInfo
    images: string[]
    is_featured: boolean
    createdAt?: string
    updatedAt?: string
}
export type Property = PropertyDTO;