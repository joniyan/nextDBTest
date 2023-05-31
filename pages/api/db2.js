import Person from '../../models/Person';

export default async function handler(req, res) {

    try {
        // Create a new user
        const person = await Person.create({ PersonID: 12, LastName: 'hi', FirstName: 'hihi', Address: 'hjii', City: 'jjj' });
        res.status(201).json(person);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error creating user' });
    }
}