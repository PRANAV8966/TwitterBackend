import HashTag from '../model/Hashtag.js'

class HashTagRepository {

    async createHashTag(data) {
        try {
            const hashTag = await HashTag.create(data);
            return hashTag;
        } catch (error) {
            throw error;
        }
    }
    
    async getHashTags() {
        try {
            const tags = await HashTag.find();
            return tags;
        } catch (error) {
            throw error;
        }
    }

    async getHashTag(id) {
        try {
            const tag = await HashTag.findById(id);
            return tag;
        } catch (error) {
            throw error;
        }
    }

    async bulkCreate(data) {
        try {
            const tag = await HashTag.insertMany(data);
            return tag;
        } catch (error) {
            throw error;
        }
    }

    async findByName(titleList) {
        try {
            const tags = await HashTag.find({
                title: titleList
            }).select('title -_id');
            return tags;
        } catch (error) {
            throw error;
        }
    }
}

export default HashTagRepository;