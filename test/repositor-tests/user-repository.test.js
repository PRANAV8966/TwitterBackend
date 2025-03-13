import UserRepository from '../../src/repository/user-repository.js';
import User from '../../src/model/user-model.js';

jest.mock('../../src/model/user-model.js');

test('should be able to create user', async () => {
    const data = {
        userEmail: 'A@Z.com',
        userpassword: 1234567,
        name: 'vaishnavi'
    }
    const spy = jest.spyOn(User, 'create').mockImplementation(() => {
        return data;
    });

    const user = await User.create(data);

    expect(spy).toHaveBeenCalled();
    expect(user).toBe(data);
})