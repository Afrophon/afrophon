class CreateKontakts < ActiveRecord::Migration
  def self.up
    create_table :kontakts do |t|
      t.string :name
      t.string :email
      t.text :nachricht

      t.timestamps
    end
  end

  def self.down
    drop_table :kontakts
  end
end
