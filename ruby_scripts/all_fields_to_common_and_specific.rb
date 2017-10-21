require "csv"

file = File.open("app_fields.csv", "r")
file_text = file.read
file_data = file_text.split("\n").map {|line| line.split(",")}

headers = file_data[0]
fields = {}

headers.each do |h|
	fields[h] = []
end

file_data.slice(1,file_data.count).each do |row|
	headers.zip(row).each do |h_col|
		fields[h_col[0]] << (h_col[1].empty? ? nil : h_col[1])
	end
end

headers.each do |h|
	fields[h].compact!
end

real_headers = headers.slice(1, headers.count)
all_fields = fields[headers[0]]
specific_fields = {}
real_headers.map do |h|
 	specific_fields[h] = fields[h] - all_fields
end

common_fields = all_fields
real_headers.map do |h|
	common_fields -= specific_fields[h]
end
common_fields.flatten!

CSV.open("common_and_specific_fields.csv", "w+") do |csv|
	csv << ["Common Fields"]
	csv << common_fields.uniq
	specific_fields.keys.each do |k|
		csv << []
		csv << []
		csv << [k]
		csv << specific_fields[k].uniq
	end
end