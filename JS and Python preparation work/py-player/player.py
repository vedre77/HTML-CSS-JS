class Player(object):
    def __init__(self):
        self.current_track = ''
        self.list = []

    def add(self, track):
        self.list.append(track)

    def play(self):
        if self.current_track == '':
            self.current_track = self.list[0]
        print('Now playing {} by {}'.format(self.current_track.title, self.current_track.artist))

    def next(self):
        index = self.list.index(self.current_track)
        if index + 1 != len(self.list):
            self.current_track = self.list[index + 1]
        else:
            self.current_track = self.list[0]

    def previous(self):
        index = self.list.index(self.current_track)
        if index - 1 < 0:
            self.current_track = self.list[len(self.list) - 1]
        else:
            self.current_track = self.list[index - 1]

    def select_track(self, index):
        self.current_track = self.list[index]

    def print_tracks_info(self):
        for elem in self.list:
            print('Track {}: {} ({}) by {}'.format(self.list.index(elem), elem.title, elem.album, elem.artist))


