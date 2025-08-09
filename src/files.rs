use std::fs::{self};


pub struct ReadFiles {
}

impl ReadFiles {

    pub fn read_file(path: &str) -> String {

        String::from_utf8(fs::read(path).unwrap()).unwrap()

    }

} 