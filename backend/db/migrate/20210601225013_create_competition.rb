class CreateCompetition < ActiveRecord::Migration[5.2]
  def change
    create_table :competitions do |t|
      t.string :name
      t.integer :date
      t.integer :prize
    end
  end
end
