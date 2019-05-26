var app = new Vue({
	el: '#app',
	data: {
		title: 'Задание 2',
		startingPosition: null,
		possiblePositions: null,
		isButtonDisabled: true,
		showStatus: {
			formIsShow: true,
			answerIsShow: false
		},
		classForm: {
			'calculation-form': true
		},
		classAnswer: {
			'modal-answer': true
		}
	},
	methods: {
		/*Проверка. Отправка пустой формы*/
		updateButtonStatus: function () {
			return this.isButtonDisabled = this.startingPosition ==='' ? true : false
		},
		okForm: function() {
			function initCol() {return ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']}
			function initRow() {return ['1', '2', '3', '4', '5', '6', '7', '8']}
			let tableCol = initCol()
			let tableRow = initRow()
			// console.log(tableRow)
			// console.log(tableRow.indexOf(this.startingPosition.substr(1)))
			let rowIndex = tableRow.indexOf(this.startingPosition.substr(1))
			let colIndex = tableCol.indexOf(this.startingPosition.charAt(0))
			// console.log('startingPosition: '+tableCol[colIndex]+' '+tableRow[rowIndex])
			/*Определяем существующие клетки с существующими координатами 
			для хода, из текщей позции*/
			let possiblePositions = [
				//Право
				tableCol[colIndex+2]+tableRow[rowIndex+1],
				tableCol[colIndex+2]+tableRow[rowIndex-1],
				//Влево
				tableCol[colIndex-2]+tableRow[rowIndex+1],
				tableCol[colIndex-2]+tableRow[rowIndex-1],
				//Вперед
				tableCol[colIndex+1]+tableRow[rowIndex+2],
				tableCol[colIndex-1]+tableRow[rowIndex+2],
				//Назад
				tableCol[colIndex+1]+tableRow[rowIndex-2],
				tableCol[colIndex-1]+tableRow[rowIndex-2]
			]

			console.log(possiblePositions)
			for (var i = possiblePositions.length - 1; i >= 0; i--) {
				console.log(possiblePositions[i])
				if (typeof(possiblePositions[i]) === 'number') {
					console.log('if')
					console.log('number')
					possiblePositions.splice(i, 1)
				}
				else {
					console.log('else')
					if (possiblePositions[i].indexOf('undefined') != -1) {
						console.log('undefined')
						possiblePositions.splice(i, 1)
					}
				}
				console.log(possiblePositions)
			}

			console.log(possiblePositions)

			this.possiblePositions = possiblePositions.join(' ')
			this.showStatus.formIsShow = false
			this.showStatus.answerIsShow = true
			return
		},
		okAnswer: function() {
			this.showStatus.formIsShow = true
			this.showStatus.answerIsShow = false
			return
		}
	}
})
