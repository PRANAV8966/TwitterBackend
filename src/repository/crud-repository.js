class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            console.log('something went wrong in the crud repo', error);
            throw error;
        }
    }

    async get(id) {
        try {
            const response = await this.model.findOne({id});
            return response;
        } catch (error) {
            console.log('something went wrong in the crud repo', error);
            throw error;
        }
    }

    async getAll() {
        try {
            const response = await this.model.find();
            return response;
        } catch (error) {
            console.log('something went wrong in the crud repo');
            throw error;
        }
    }

    async destroy(id) {
        try {
            await this.model.findByIdAndDelete(id);
            return true;
        } catch (error) {
            console.log('something went wrong in the crud repo');
            throw error;
        }
    }

    async update(id, data) {
        try {
            const response = await this.model.findByIdAndUpdate(id, data, {new:true});
            return response;
        } catch (error) {
            console.log('something went wrong in the crud repo');
            throw error;
        }
    }
}

export default CrudRepository;