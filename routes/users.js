module.exports = {
    getUsers(req, res) {
        res.status(200).send(req.store.users)
    },
    addUser(req, res) {
        
        const phoneNumber = req.body?.phoneNumber;
        const validationCode = Math.floor(Math.random()*90000) + 10000;

        req.store.users.push({
            phoneNumber,
            validationCode
        })
        res.status(201).send({"id": req.store.users.length})
    },
    validate(req, res) {
        const id = req.params.userId;
        const validationCode = req.body.code;
        if (id) {
            if (code) {
                if (validationCode === 12345) {
                    return res.status(200).send({message: "validation successful"});
                } else {
                    res.status(401).send({message: "Invalid code!"});
                }
            } else {
                res.status(400).send({error: "code not sent"});
            }
        } else {
            res.status(404).send({error: "user not registered!"});
        }
    }
}