Game.destroy_all
Comment.destroy_all

Game.create(name: "Alan Wake Remastered", producer: "Remedy", score: 9.0, image: "https://cdn1.epicgames.com/salesEvent/salesEvent/en_Remedy_DEER_S2_1200x1600_1200x1600-43dd4a2f28f9edbf0ed1461339fc11d4")

Comment.create(text: "Nostalgic", game_id: 1)