resource "aws_s3_bucket" "my_s3_bucket"{
    bucket = "my-s3-test-bucket02-pg"

    tags = {
    Name = "My bucket"
    Enviroment ="Dev"
    }
}