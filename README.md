# API DOCUMENTATION

Steam Games Inventory System is a steam games inventory management app.

## Steam Games Inventory System

Restful Endpoints

### Home Routes
#### GET /
Get all users

- Request
    - Request Header: none
    - Request Body: none

- Response
    - Success (200):
    ```json
    [
        {
            "id": "<user_id>",
            "username": "<user_username>",
            "password": "<user_password>",
            "avatar": "<user_avatar>",
            "wallet": "<user_wallet>",
            "deletedFlag": "<user_deletedFlag>",
            "createdAt": "<user_createdAt>",
            "updatedAt": "<user_updatedAt>",
            "UserInventories": [
                {
                    "id": "<userinventory_id>",
                    "UserId": "<userinventory_UserId>",
                    "GameId": "<userinventory_GameId>",
                    "createdAt": "<userinventory_createdAt>",
                    "updatedAt": "<userinventory_updatedAt>",
                }
            ]
        }
    ]
    ```
    - Failure (500):
    ```json
    {
        "message": "<internal_memory_error>"
    }
    ```

### Users Routes
#### GET users/register
Render register user page

- Request
    - Request Header: none
    - Request Body: none

- Response
    - Success (200): none
    - Failure (500): 
    ```json
    {
        "message": "<internal_memory_error>"
    }
    ```

#### POST users/register
Register users

- Request
    - Request Header: none
    - Request Body: 
    ```json
    {
        "username": "<user_username>",
        "password": "<user_password>",
    }
    ```

- Response
    - Success (201): none
    - Username already exists (400):
    ```json
    {
        "message": "<Username already exists!>"
    }
    ```
    - Failure (500):
    ```json
    {
        "message": "<internal_memory_error>"
    }
    ```

#### GET users/:UserId
Get users details

- Request
    - Request Header: none
    - Request Body: none

- Response
    - Success (200):
    ```json
    [
        {
            "id": "<user_id>",
            "username": "<user_username>",
            "password": "<user_password>",
            "avatar": "<user_avatar>",
            "wallet": "<user_wallet>",
            "deletedFlag": "<user_deletedFlag>",
            "createdAt": "<user_createdAt>",
            "updatedAt": "<user_updatedAt>"
        }
    ],
    [
        {
            "id": "<userinventory_id>",
            "UserId": "<userinventory_UserId>",
            "GameId": "<userinventory_GameId>",
            "createdAt": "<userinventory_createdAt>",
            "updatedAt": "<userinventory_updatedAt>",
            "Games": [
                {
                    "id": "<game_id>",
                    "name": "<game_name>",
                    "description": "<game_description>",
                    "genre": "<game_genre>",
                    "price": "<game_price>",
                    "image": "<game_image>",
                    "createdAt": "<game_createdAt>",
                    "updatedAt": "<game_updatedAt>",
                }
            ]
        }
    ]
    ```
    - Failure (500):
    ```json
    {
        "message": "<internal_memory_error>"
    }
    ``` 

#### GET users/edit/:UserId
Render update user page

- Request
    - Request Header: none
    - Request Body: none

- Response
    - Success (200): 
    ```json
    [
        {
            "id": "<user_id>",
            "username": "<user_username>",
            "password": "<user_password>",
            "avatar": "<user_avatar>",
            "wallet": "<user_wallet>",
            "deletedFlag": "<user_deletedFlag>",
            "createdAt": "<user_createdAt>",
            "updatedAt": "<user_updatedAt>"
        }
    ]
    ```
    - Failure (500):
    ```json
    {
        "message": "<internal_memory_error>"
    }
    ```

#### POST users/update/:UserId
Update users

- Request
    - Request Header: none
    - Request Body: 
    ```json
    [
        {
            "username": "<user_username>",
            "password": "<user_password>",
            "avatar": "<user_avatar>"
        }
    ]
    ```

- Response
    - Success (200):
    ```json
    [
        {
            "user_id": "<user_id>",
        }
    ]
    ```
    - Failure (500):
    ```json
    {
        "message": "<internal_memory_error>"
    }
    ```

#### POST users/delete/:UserId
Delete users

- Request
    - Request Header: none
    - Request Body: none

- Response
    - Success (200): none
    - Failure (500):
    ```json
    {
        "message": "<internal_memory_error>"
    }
    ```

#### POST users/:UserId/addFunds
Add user wallet

- Request
    - Request Header: none
    - Request Body: 
    ```json
    [
        {
            "wallet": "<user_wallet>"
        }
    ]
    ```

- Response
    - Success (200): none
    - Failure (500):
    ```json
    {
        "message": "<internal_memory_error>"
    }
    ```

### Games Routes
#### GET games/:UserId/store
Get all games

- Request
    - Request Header: none
    - Request Body: none

- Response
    - Success (200): 
    ```json
    [
        {
            "id": "<game_id>",
            "name": "<game_name>",
            "description": "<game_description>",
            "genre": "<game_genre>",
            "price": "<game_price>",
            "image": "<game_image>",
            "createdAt": "<game_createdAt>",
            "updatedAt": "<game_updatedAt>",
        }
    ],
    [
        {
            "id": "<user_id>",
            "username": "<user_username>",
            "password": "<user_password>",
            "avatar": "<user_avatar>",
            "wallet": "<user_wallet>",
            "deletedFlag": "<user_deletedFlag>",
            "createdAt": "<user_createdAt>",
            "updatedAt": "<user_updatedAt>"
        }
    ]
    ```
    - Failure (500):
    ```json
    {
        "message": "<internal_memory_error>"
    }
    ```
#### GET games/:UserId/detail/:GameId
Get games details

- Request
    - Request Header: none
    - Request Body: none

- Response
    - Success (200):
    ```json
    [
        {
            "id": "<game_id>",
            "name": "<game_name>",
            "description": "<game_description>",
            "genre": "<game_genre>",
            "price": "<game_price>",
            "image": "<game_image>",
            "createdAt": "<game_createdAt>",
            "updatedAt": "<game_updatedAt>",
        }
    ],
    [
        {
            "id": "<user_id>",
            "username": "<user_username>",
            "password": "<user_password>",
            "avatar": "<user_avatar>",
            "wallet": "<user_wallet>",
            "deletedFlag": "<user_deletedFlag>",
            "createdAt": "<user_createdAt>",
            "updatedAt": "<user_updatedAt>"
        }
    ],
    [
        {
            "id": "<userinventory_id>",
            "UserId": "<userinventory_UserId>",
            "GameId": "<userinventory_GameId>",
            "createdAt": "<userinventory_createdAt>",
            "updatedAt": "<userinventory_updatedAt>"
        }
    ]
    ```
    - Failure (500):
    ```json
    {
        "message": "<internal_memory_error>"
    }
    ```
#### GET games/:UserId/add
Render add games page
- Request
    - Request Header: none
    - Request Body: none

- Response
    - Success (200):
    ```json
    [
        {
            "id": "<user_id>",
            "username": "<user_username>",
            "password": "<user_password>",
            "avatar": "<user_avatar>",
            "wallet": "<user_wallet>",
            "deletedFlag": "<user_deletedFlag>",
            "createdAt": "<user_createdAt>",
            "updatedAt": "<user_updatedAt>"
        }
    ]
    ```
    - Failure (500):
    ```json
    {
        "message": "<internal_memory_error>"
    }
    ```

#### POST games/:UserId/add
Add new games

- Request
    - Request Header: none
    - Request Body: 
    ```json
    [
        {
            "name": "<game_name>", 
            "description": "<game_description>", 
            "genre": "<game_genre>", 
            "price": "<game_price>", 
            "image": "<game_image>"
        }
    ]
    ```

- Response
    - Success (201):
    ```json
    [
        {
            "UserId": "<user_id>"
        },
        {
            "GameId": "<game_id>"
        }
    ]
    ```
    - Game already exists (400):
    ```json
    {
        "message": "<Game already exists!>"
    }
    ```
    - Failure (500):
    ```json
    {
        "message": "<internal_memory_error>"
    }
    ```
#### GET games/:UserId/edit/:GameId
Render update games page

- Request
    - Request Header: none
    - Request Body: none

- Response
    - Success (200):
    ```json
    [
        {
            "id": "<game_id>",
            "name": "<game_name>",
            "description": "<game_description>",
            "genre": "<game_genre>",
            "price": "<game_price>",
            "image": "<game_image>",
            "createdAt": "<game_createdAt>",
            "updatedAt": "<game_updatedAt>",
        }
    ],
    [
        {
            "id": "<user_id>",
            "username": "<user_username>",
            "password": "<user_password>",
            "avatar": "<user_avatar>",
            "wallet": "<user_wallet>",
            "deletedFlag": "<user_deletedFlag>",
            "createdAt": "<user_createdAt>",
            "updatedAt": "<user_updatedAt>"
        }
    ]
    ```
    - Failure (500):
    ```json
    {
        "message": "<internal_memory_error>"
    }
    ```
#### POST games/:UserId/update/:GameId
Update games

- Request
    - Request Header: none
    - Request Body: 
    ```json
    [
        {
            "name": "<game_name>", 
            "description": "<game_description>", 
            "genre": "<game_genre>", 
            "price": "<game_price>", 
            "image": "<game_image>"
        }
    ]
    ```
- Response
    - Success (200):
    ```json
    [
        {
            "UserId": "<user_id>"
        },
        {
            "GameId": "<game_id>"
        }
    ]
    ```
    - Failure (500):
    ```json
    {
        "message": "<internal_memory_error>"
    }
    ```
#### POST games/:UserId/remove/:GameId
Delete games

- Request
    - Request Header: none
    - Request Body: none

- Response
    - Success (200):
    ```json
    [
        {
            "UserId": "<user_id>"
        }
    ]
    ```
    - Failure (500):
    ```json
    {
        "message": "<internal_memory_error>"
    }
    ```

### UserCart Routes
#### GET carts/:UserId
Get users carts

- Request
    - Request Header: none
    - Request Body: none

- Response
    - Success (200):
    ```json
    [
        {
            "id": "<cart_id>",
            "UserId": "<cart_UserId>",
            "GameId": "<cart_GameId>",
            "createdAt": "<cart_createdAt>",
            "updatedAt": "<cart_updatedAt>",
            "Games": {
                "id": "<game_id>",
                "name": "<game_name>",
                "genre": "<game_genre>",
                "price": "<game_price>"
            }
        }
    ],
    [
        {
            "id": "<user_id>",
            "username": "<user_username>",
            "password": "<user_password>",
            "avatar": "<user_avatar>",
            "wallet": "<user_wallet>",
            "deletedFlag": "<user_deletedFlag>",
            "createdAt": "<user_createdAt>",
            "updatedAt": "<user_updatedAt>"
        }
    ]
    ```
    - Failure (500):
    ```json
    {
        "message": "<internal_memory_error>"
    }
    ```
#### POST carts/:UserId/add/:GameId
Add new carts

- Request
    - Request Header: none
    - Request Body: none
    
- Response
    - Success (201):
    ```json
    [
        {
            "UserId": "<user_id>"
        }
    ]
    ```
    - Already owned (403):
    ```json
    {
        "message": "<You already own this game!>"
    }
    ```
    - Already exists (400):
    ```json
    {
        "message": "<This game is already in your cart!>"
    }
    ```
    - Failure (500):
    ```json
    {
        "message": "<internal_memory_error>"
    }
    ```
#### POST carts/remove/:CartId
Remove carts

- Request
    - Request Header: none
    - Request Body: none

- Response
    - Success (200):
    ```json
    [
        {
            "UserId": "<cart_UserId>"
        }
    ]
    ```
    - Failure (500):
    ```json
    {
        "message": "<internal_memory_error>"
    }
    ```
### UserInventory Routes
#### POST inventories/buy/:CartId
Add games to users inventory & delete games from carts
- Request
    - Request Header: none
    - Request Body: none

- Response
    - Success (201):
    ```json
    [
        {
            "id": "<user_id>"
        }
    ]
    ```
    - Validation error (400):
    ```json
    [
        { 
            "message": "<Not enough wallet to buy the game!>"
        }
    ]
    ```
    - Failure (500):
    ```json
    {
        "message": "<internal_memory_error>"
    }
    ```