import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburCongeladosVerdurasFrutas extends BasePage {

    readonly Verduras_Frutas: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.Verduras_Frutas = this.page.locator('//a [@id="menu-item-category-limpieza-cocina"]');
    }

    async clickCongeladosVerdurasFrutas(): Promise<void> {
        await this.click(this.Verduras_Frutas)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburCongeladosVerdurasFrutas(): Promise<void> {
        await this.clickCongeladosVerdurasFrutas()
    }
}
