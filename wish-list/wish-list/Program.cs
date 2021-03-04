using System;



Console.WriteLine("My wishes...");

foreach (Wish myWish in allWishes)
{
    Console.WriteLine($"  {myWish.Text}");
}

List<Wish> Wishes = GetAllWishes();

List<Wish> GetAllWishes()
{
    List<Wish> Wishes = new List<Wish>()
{
    new Wish()
    {
        Text = "An original eight track of William Shatner's 'Lucy in the Sky with Diamonds'"
    },
    new Wish()
    {
        Text = "The ability to think of interesting wishes on short notice"
    },
    new Wish()
    {
        Text = "A washtub of Skittles"
    },
    new Wish()
    {
        Text =  "World peace, but not the kind of world peace where all the humans are removed from existence"
    },
    new Wish()
    {
        Text =  "A TV that is NOT internet-capable"
    },
    new Wish()
    {
        Text = "The ability to fly, but, like, really fast...not just, like, how fast I can walk, but, like, fast, you know?"
    },

};
}
public class Wish
{
    public string Text { get; set; }
};

public class WishList
{
    public string Text { get; set; }
    public List<Wish> Wishes { get; set; }
};