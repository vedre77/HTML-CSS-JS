from player import Player
from track import Track


def run():
    player = Player()
    track1 = Track('Incubus', 'Drive', 'Make Yourself')
    track2 = Track('Ritchie Valens', 'La Bamba', 'La Bamba')
    track3 = Track('Red Hot Chilli Peppers', 'Californication', 'Californication')

    player.add(track1)
    player.add(track2)
    player.add(track3)

    player.play()

    player.next()
    player.play()

    player.next()
    player.play()

    player.next()
    player.play()

    player.previous()
    player.play()

    player.select_track(1)
    player.play()

    player.print_tracks_info()


if __name__ == "__main__":
    run()