require "csv"
require "json"

file = File.open("app_fields.csv", "r")
file_text = file.read
file_data = file_text.split("\n").map {|line| line.split(",")}

headers = file_data[0]
fields = {}

headers.each do |h|
	fields[h] = []
end

file_data.slice(1,file_data.count).each do |row|
	row_orig = row
	row = row + (row.count...headers.count).map {|x| ""}
	headers.each_with_index do |h, i|
		col = row[i]
		fields[h] << (col.nil? | col.empty? ? nil : col)
	end
end

headers.each do |h|
	fields[h].compact!
end

real_headers = headers.slice(1, headers.count)
all_fields = fields[headers[0]].uniq
common_fields = all_fields
puts "\n\n\nDETERMINING COMMON FIELDS"
puts "\n\n\ncommon fields: #{common_fields}"
real_headers.map do |h|
	common_fields &= fields[h]
	puts "\n\n\ncommon fields: #{common_fields}"
end
common_fields.flatten!

specific_fields = {}
real_headers.map do |h|
 	specific_fields[h] = fields[h] - common_fields
end

CSV.open("common_and_specific_fields.csv", "w+") do |csv|
	csv << ["Common Fields"]
	csv << common_fields.uniq.sort
	specific_fields.keys.each do |k|
		csv << []
		csv << []
		csv << [k]
		csv << specific_fields[k].uniq.sort
	end
end

csv_array = []
json_hash_array = []
all_fields.each do |f|

	csv_row = [f]
	real_headers.each do |h|
		csv_row << (fields[h].include?(f) ? h : nil)
	end
	csv_row.compact!
	csv_array << csv_row
	
	mini_hash = {}
	mini_hash["type"] = "text"
	mini_hash["label"] =""
	mini_hash["value"] = f
	mini_hash["requiredBy"] = csv_row.slice(1, csv_row.count)
	json_hash_array << mini_hash

end

CSV.open("fields_belong_to.csv", "w+") do |csv|
	csv << ["field_name", "needed_by"]
	csv_array.each do |row|
		csv << row
	end
end

json_array_string = json_hash_array.map {|x| x.to_s}.join(",\n").gsub("=>", ":")
json_array_string = ["[\n", json_array_string, "\n]"].join

json_file = File.open("fields_belong_to.json", "w+")
json_file.write json_array_string
json_file.close