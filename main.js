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
			let rowIndex = tableRow.indexOf(this.startingPosition.substr(1))
			let colIndex = tableCol.indexOf(this.startingPosition.charAt(0))
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
			/*Определяем существующие клетки с существующими координатами 
			для хода, из текщей позции*/
			for (var i = possiblePositions.length - 1; i >= 0; i--) {
				if (typeof(possiblePositions[i]) === 'number') {
					possiblePositions.splice(i, 1)
				}
				else {
					if (possiblePositions[i].indexOf('undefined') != -1) {
						possiblePositions.splice(i, 1)
					}
				}
			}

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
