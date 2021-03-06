Note.delete_all
Todo.delete_all
List.delete_all 

10.times do 
  list = List.create(
    title: Faker::Kpop.boy_bands,
    desc: Faker::Lorem.paragraph
  )
  3.times do
    todo = Todo.create(
      title: Faker::Mountain.name,
      complete: Faker::Boolean.boolean,
      list_id: list.id
    )
    Note.create(
      subject: Faker::Kpop.boy_bands,
      body: Faker::Lorem.paragraph,
      todo_id: todo.id
    )
  end 
end

puts "All List Number: #{List.all.count}"
List.all.each do |list|  
  puts "#{list.id}, title: #{list.title} desc: #{list.desc}"
end

puts "All Todo Numbers: #{Todo.all.count}"
Todo.all.each do |todo|  
  puts "#{todo.id}, title: #{todo.title} complete: #{todo.complete}"
end

puts "Number of notes: #{Note.all.count}"
Note.all.each do |note|  
  puts "#{note.id}, Subject: #{note.subject} body: #{note.body}"
end
