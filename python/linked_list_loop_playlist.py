class Song:
    def __init__(self, name):
        self.name = name
        self.next = None

    def next_song(self, song):
        self.next = song 
    
    def is_in_repeating_playlist(self):
        """
        :returns: (bool) True if the playlist is repeating, False if not.
        """
        song_list = set()
        next_song = self

        while next_song:
            if next_song.name in song_list:
                return True
            song_list.add(next_song.name)
            next_song = next_song.next

        return False

# Test            
first = Song("Hello")
second = Song("Eye of the tiger")
    
first.next_song(second)
second.next_song(first)

isLoop = first.is_in_repeating_playlist()
assert isLoop == True
