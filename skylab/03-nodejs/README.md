# NodeJS

## Script

- [x] what is an API and nodejs?
- [x] installing nodejs
- [x] creating structure
- [x] creating the first route
- [x] using nodemon
- [x] installing mongodb
- [x] connecting to database
- [x] creating the product model
- [x] restructuring the files
- [x] using insomnia
- [x] record creation
- [x] CRUD
- [x] list's pagination
- [x] adding CORS

## Testing the API

First of all you need install the tools listed 
  - [Git](https://git-scm.com/)
  - [NPM](https://nodejs.org/en/)
  - [Docker](https://docs.docker.com/get-docker/)

With the tools listed above follow the steps above:

1. Clone the repository `git clone https://github.com/raphaelhaf/rocketseat-skylab-studies.git`

2. Get into the folder ``

3. Install the dependencies with `npm install`

4. Create a new MongoDB container by running `docker run --name mongodb -p 27017:27017 -d mongo`
  - --name: the container's name
  - -p: binding the host port with the container's port (host:container)
  - -d: to run detached

5. Run the script to start the expressjs server that's contain the API with an `npm run dev`

6. Optional: In case of the MongoDB container stoping unexpectedly, start again:
  - Verify the container name and his status `docker ps -a``
  - Restart the container `docker start mongodb <container-name>`
  - Stop the container wherever you want `docker stop mongodb <container-name>`

7. Open the [Insomnia](https://insomnia.rest/) or [Postman](https://www.getpostman.com/)

8. In Insomnia, click in "No Environment" (in the left superior side) and select "Manage Environments". In "Base Environments" add in JSON format""
    ```
    {
    "base_url": "http://localhost:3000/api"
    }
    ```
9. In the initial screen click in the "+" signal at the superior left corner and select "New Request" and add the necessary requests to make the CRUD.

10. Configure the following requests

- **index**

        - GET base_url/products
        - *or GET base_url/products?page=\<page_number>

    - **show**

        - GET base_url/products/\<product-id>

    - **create**

        - POST base_url/products

            Click in "Body below "POST" option and select "JSON". Inform the fields and their respective values

            ```
            {
                "title":"product",
                "description":"product description",
                "url":"http://..."
            }
            ```

    - **update**

        - PUT base_url/products/\<product-id>

            Follow the "create" example.

    - **destroy**

        - DELETE base_url/products/\<product-id>