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
	headers.zip(row).each do |h_col|
		fields[h_col[0]] << (h_col[1].empty? ? nil : h_col[1])
	end
end

headers.each do |h|
	fields[h].compact!
end

real_headers = headers.slice(1, headers.count)
all_fields = fields[headers[0]].uniq
common_fields = all_fields
real_headers.map do |h|
	common_fields &= fields[h]
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

label_file = File.open("app_labels.csv", "r")
label_text = label_file.read
label_data = label_text.split("\n").map {|line| line.split(",")}

label_hash = {}
label_data.each do |field, label|
	label_hash[field] = label
end


field_store_grab = {}

field_store_grab["contactinfo"] = ["name", "address", "state", "city", "zip", "home", "work", "cell", "email"]

field_store_grab["member"] = ["member1", "memberDOB1", "memberEmployer1", "memberEmploymentDuration1", "memberGrossAnnualIncome1", "memberName1", "memberRelationship1", "memberSex1", "memberSSN1"]

field_store_grab["finances"] = ["assetAccountType1", "assetAmount1", "extraIncomeAmount1", "extraIncomeFrequency1", "memberGrossAnnualIncome1", "totalHouseholdAnnualIncome"]

field_store_grab["credithistory"] = ["creditCardName1", "lastPaymentDate1", "lenderName1", "loanBalance1", "loanType1"]

field_store_grab["driverslicense"] = ["driversLicenseNumber1", "driversLicenseNumber2", "driversLicenseNumber3", "driversLicenseState1", "driversLicenseState2", "driversLicenseState3"]


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
	mini_hash["label"] = label_hash[f].nil? ? "" : label_hash[f]
	mini_hash["name"] = f
	mini_hash["value"] = ""
	mini_hash["requiredBy"] = csv_row.slice(1, csv_row.count)

	form = field_store_grab.keys.find do |k|
		field_store_grab[k].include? f
	end
	mini_hash["form"] = form.nil? ? "" : form
	
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

# field_store = {}
# field_store_grab.keys.each do |k|
# 	field_store[k] = []
# 	json_hash_array.each do |h|
# 		(field_store[k] << h) if field_store_grab[k].include? h["name"]
# 	end
# end

# field_store_string = field_store.keys.map {|k| {k => field_store[k]}.to_s}.join(",\n").gsub("=>", ":") 
# field_store_string = ["[\n", field_store_string, "\n]"].join

# field_file = File.open("field_store.json", "w+")
# field_file.write field_store_string
# field_file.close