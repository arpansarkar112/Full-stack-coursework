let posts = [
    { id: 1, title: 'Post One' },
    { id: 2, title: 'Post Two' },
    { id: 3, title: 'Post Three' }
];

export const getPosts = (req, res) => {
    const limit = parseInt(req.query.limit);
    if (!isNaN(limit) && limit > 0) {
        return res.json(posts.slice(0, limit));
    }
    res.json(posts);
};

export const getPost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        const error = new Error('Post not found');
        error.status = 404;
        return next(error);
    }
    res.json(post);
};

export const createPost = (req, res) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    };

    if (!newPost.title) {
        return res.status(400).json({ msg: 'Please include a title' });
    }

    posts.push(newPost);
    res.status(201).json(posts);
};

export const updatePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        const error = new Error('Post not found');
        error.status = 404;
        return next(error);
    }

    post.title = req.body.title;
    res.json(post);
};

export const deletePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        const error = new Error('Post not found');
        error.status = 404;
        return next(error);
    }

    posts = posts.filter((post) => post.id !== id);
    res.json(posts);
};
