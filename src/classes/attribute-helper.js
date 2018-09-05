import Attributes from './../data/attribute-mappings.json';

export default class AttributeHelper {
    static GetAttributeImage (attributeName) {
        const path = "/icons/"

        if(Attributes[attributeName]){
            let imagePath = path + Attributes[attributeName].icon;
            
            return imagePath;
        }

        return "";
    }
}