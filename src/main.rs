use crate::files::ReadFiles;

pub mod files;

fn main() {
    
    println!("{}",ReadFiles::read_file("source_1.txt"));
}
 