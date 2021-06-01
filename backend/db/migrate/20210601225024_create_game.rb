class CreateGame < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.integer :player_id
      t.integer :competition_id
      t.string :name
    end
  end
end
